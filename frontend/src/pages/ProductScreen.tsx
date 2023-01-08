import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../interfaces/Product'
import { CommonSelect } from '../components/common/CommonSelect'
import { SelectOption } from '../interfaces/SelectOption'
import { ImageSet } from '../components/Product/ImageSet'
import { ImageSlider } from '../components/Product/ImageSlider'
import { GalleryModal } from '../components/Product/GalleryModal'
import { useSelector, useDispatch } from 'react-redux'
import { activeImageSelector } from '../redux/product/selectors'
import { Container } from '@mui/system'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'
import { toast } from 'react-toastify'

import { axiosInstance } from '../services/axiosInstance'

import {
  AiFillCheckCircle,
  AiOutlineShoppingCart,
  AiFillHeart,
} from 'react-icons/ai'

import {
  Typography,
  Grid,
  Rating,
  CardContent,
  CardActions,
  Chip,
  List,
  ListItem,
  Card,
  Divider,
  CircularProgress,
} from '@mui/material'
import { addProductAction } from '../redux/cart/actions'

const options: SelectOption[] = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
]

const ProductScreen: React.FC<any> = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product>()
  const [quantity, setQuantity] = useState<number>(1)
  const [productImages, setProductImages] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useDispatch()

  const activeImage = useSelector(activeImageSelector)

  const fetchProduct = async () => {
    try {
      const { data } = await axiosInstance.get(`api/products/${id}`)
      const { product, images } = data
      setProduct(product)
      setProductImages(images)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  const addProduct = () => {
    console.log(product)
    dispatch(
      addProductAction({ ...product, defaultImage: activeImage.url }, quantity),
    )
    toast.info('Product added to cart !')
  }

  if (product) {
    const { name, price, numberOfReviews, rating, description } = product

    return (
      <Container maxWidth={false} sx={{ width: '85%', mt: 6 }}>
        <Typography
          sx={{
            fontSize: 36,
            color: '#404040',
            fontFamily: 'Source Sans Pro',
            fontWeight: 700,
            paddingBottom: 5,
          }}
        >
          {name}
        </Typography>
        <Grid container direction="row" columnSpacing={3} rowSpacing={4}>
          <Grid item xs={12} md={12} lg={4}>
            <ImageSlider images={productImages} activeImage={activeImage} />
            <ImageSet images={productImages} />
          </Grid>

          <Grid container item xs={12} md={12} lg={4}>
            <List sx={{ paddingTop: 10 }}>
              <ListItem sx={{ gap: 1 }}>
                <Rating size="large" value={rating} precision={0.5} readOnly />
                <Typography sx={{ fontSize: 20, transform: 'translateY(-5%)' }}>
                  {rating}
                </Typography>
                <Typography sx={{ fontSize: 20, transform: 'translateY(-5%)' }}>
                  ({numberOfReviews})
                </Typography>
              </ListItem>
              <Divider
                sx={{
                  pt: 1,

                  borderBottomWidth: 1,
                  borderColor: 'black',
                  opacity: 0.3,
                }}
              />
              <ListItem sx={{ pt: 2, pb: 2 }}>
                <Grid container direction="row" columnSpacing={2}>
                  <Grid item>
                    <Typography variant="h6">Availability: </Typography>
                  </Grid>
                  <Grid item>
                    <Chip
                      icon={<AiFillCheckCircle size="25" />}
                      color="success"
                      label="In stock"
                    />
                  </Grid>
                </Grid>
              </ListItem>
              <Divider
                sx={{
                  borderBottomWidth: 1,
                  borderColor: 'black',
                  opacity: 0.3,
                }}
              />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: '500',
                  }}
                >
                  {description}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Card sx={{ overflow: 'visible' }}>
              <CardContent>
                <Grid container direction="row">
                  <Grid item lg={6} xs={6}>
                    <Typography
                      gutterBottom
                      textAlign="left"
                      variant="h5"
                      component="div"
                    >
                      Price
                    </Typography>
                  </Grid>
                  <Grid item lg={6} xs={6}>
                    {price}$
                  </Grid>
                </Grid>
                <Grid container direction="row">
                  <Grid item lg={6} xs={6}>
                    <Typography
                      gutterBottom
                      textAlign="left"
                      variant="h5"
                      component="div"
                    >
                      Quantity
                    </Typography>
                  </Grid>
                  <Grid item lg={6} xs={6}>
                    <CommonSelect
                      value={quantity}
                      onChange={(e: any) => setQuantity(e.value)}
                      options={options}
                    />
                  </Grid>
                </Grid>
              </CardContent>

              <CardActions>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  rowSpacing={1}
                >
                  <Grid item>
                    <LoadingButton
                      onClick={addProduct}
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
                      variant="contained"
                      sx={{
                        width: '100%',
                        height: '40px',
                      }}
                    >
                      Add to cart
                    </LoadingButton>
                  </Grid>
                  <Grid item>
                    <Button
                      disableRipple
                      sx={{ width: '100%' }}
                      variant="outlined"
                      startIcon={<AiFillHeart />}
                    >
                      Add to favorites
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <GalleryModal
          quantity={quantity}
          images={productImages}
          activeImage={activeImage}
          product={product}
        />
      </Container>
    )
  }

  return null
}

export default ProductScreen
