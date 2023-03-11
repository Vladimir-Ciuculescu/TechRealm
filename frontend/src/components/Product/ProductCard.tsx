import React, { useState } from 'react'

import { Product } from '../../interfaces/Product'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Grid,
  CardActionArea,
  CircularProgress,
} from '@mui/material'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addProductAction } from '../../redux/cart/actions'
import { toast } from 'react-toastify'
import { LoadingButton } from '@mui/lab'
import { isUserLoggedSelector, userSelector } from '../../redux/user/selectors'
import { addUserProductApi } from '../../services/productApi'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, defaultImage, id, price, numberOfReviews, rating } = product

  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  const isLogged = useSelector(isUserLoggedSelector)
  const [loading, setLoading] = useState<boolean>(false)

  const addProduct = async () => {
    dispatch(addProductAction(product, 1))

    if (isLogged) {
      setLoading(true)
      await addUserProductApi(user.id, product.id, 1)
      setLoading(false)
    }
    toast.info('Product added to cart !')
  }

  return (
    <Card sx={{ boxShadow: 'none' }} className="product_card">
      <CardActionArea
        sx={{ overflow: 'hidden' }}
        disableRipple
        href={`/products/${id}`}
      >
        <CardMedia
          sx={{
            '&:hover': {
              transform: 'scale(1.3)',
              transition: 'transform 1.5s',
            },
          }}
          component="img"
          height="300"
          alt="image"
          image={defaultImage}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {name}
        </Typography>
        <Grid container direction="row" spacing={1.5}>
          <Grid item>
            <Rating value={rating} readOnly precision={0.5} />
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: 600 }}>{rating}</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: 600 }}>
              ({numberOfReviews})
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h5">{price}$</Typography>
        <Grid
          sx={{ mt: 2 }}
          container
          justifyContent="center"
          alignItems="center"
        >
          <LoadingButton
            onClick={addProduct}
            variant="contained"
            sx={{
              width: '90%',
              textTransform: 'none',
              fontSize: '16px',
              bgcolor: 'Violet.600',
              ':hover': {
                bgcolor: 'Violet.900',
                color: 'white',
              },
            }}
            disableRipple
            startIcon={
              loading ? (
                <CircularProgress size={16} />
              ) : (
                <AiOutlineShoppingCart />
              )
            }
            loading={loading}
            loadingIndicator={
              <Typography sx={{ pl: 3.3, fontSize: 15 }}>
                Add to cart
              </Typography>
            }
          >
            Add to cart
          </LoadingButton>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProductCard
