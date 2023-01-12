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
import { useDispatch } from 'react-redux'
import { addProductAction } from '../../redux/cart/actions'
import { toast } from 'react-toastify'
import { LoadingButton } from '@mui/lab'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, defaultImage, id, price, numberOfReviews, rating } = product

  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useDispatch()

  const addProduct = () => {
    dispatch(addProductAction(product, 1))
    toast.info('Product added to cart !')
  }

  return (
    <Card sx={{ boxShadow: 'none' }} className="product_card">
      <CardActionArea disableRipple href={`/products/${id}`}>
        <CardMedia
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
            sx={{ width: '90%', textTransform: 'none', fontSize: '16px' }}
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
