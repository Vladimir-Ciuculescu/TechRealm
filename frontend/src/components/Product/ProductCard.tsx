import React from 'react'

import { Product } from '../../interfaces/Product'
import {
  CardHeader,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Button,
  Grid,
  CardActionArea,
} from '@mui/material'
import { AiOutlineShoppingCart } from 'react-icons/ai'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, defaultImage, id, price, numberOfReviews, rating } = product

  return (
    // <Card className="product_card_container">
    //   <Link to={`/products/${id}`}>
    //     <Card.Img height={300} variant="top" src={defaultImage?.url} />
    //   </Link>
    //   <Card.Body>
    //     <Link className="product_card_name" to={`/products/${id}`}>
    //       <Card.Title>
    //         <strong>{name}</strong>
    //       </Card.Title>
    //     </Link>

    //     <Rating numberOfStars={rating} numberOfReviews={numberOfReviews} />
    //     <Card.Text className="mt-3" as="h3">
    //       {price} $
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
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
          <Button
            variant="contained"
            sx={{ width: '90%', textTransform: 'none', fontSize: '16px' }}
            disableRipple
            startIcon={<AiOutlineShoppingCart />}
          >
            Add to cart
          </Button>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProductCard
