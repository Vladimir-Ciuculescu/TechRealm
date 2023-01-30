import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Image } from '../../interfaces/Image'
import {
  setActiveImageAction,
  toggleGalleryModalAction,
} from '../../redux/product/actions'
import CloseIcon from '@mui/icons-material/Close'
import { galleryModalSelector } from '../../redux/product/selectors'
import useMediaQuery from '@mui/material/useMediaQuery'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from 'react-icons/ai'
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Button,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  DialogActions,
} from '@mui/material'
import { addProductAction } from '../../redux/cart/actions'
import { Product } from '../../interfaces/Product'
import { toast } from 'react-toastify'
import { GrClose } from 'react-icons/gr'

interface GalleryModalProps {
  images: Image[]
  activeImage: Image
  quantity: number
  product: Product
}

interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  images,
  activeImage,
  quantity,
  product,
}) => {
  const dispatch = useDispatch()
  const [currentIndex, setCurrentIndex] = useState(0)

  const isFirstImage = currentIndex === 0
  const isLastImage = currentIndex === images.length - 1

  const matches = useMediaQuery('(min-width:1200px)')

  const isBigScreen = useMediaQuery('(min-width:1300px)')

  const imagesToDisplay = images.map((item, key) => {
    return { ...item, index: key }
  })

  const { visible } = useSelector(galleryModalSelector)

  const closeGalleryModal = () => {
    dispatch(toggleGalleryModalAction())
  }

  const changeCurrentImage = (imageUrl: string, index: number) => {
    dispatch(setActiveImageAction(imageUrl, index))
    setCurrentIndex(index)
  }

  const scrollHorizontal = (direction: string) => {
    switch (direction) {
      case 'left':
        setCurrentIndex(currentIndex - 1)
        break
      case 'right':
        setCurrentIndex(currentIndex + 1)
        break
      default:
        setCurrentIndex(0)
        break
    }
  }

  const addProduct = () => {
    dispatch(
      addProductAction({ ...product, defaultImage: activeImage.url }, quantity),
    )
    closeGalleryModal()
    toast.info('Product added to cart')
  }

  useEffect(() => {
    dispatch(
      setActiveImageAction(
        imagesToDisplay[currentIndex].url,
        images[currentIndex].index,
      ),
    )
  }, [currentIndex])

  return isBigScreen ? (
    <Dialog
      fullWidth
      maxWidth={false}
      open={visible}
      onClose={closeGalleryModal}
      PaperProps={{
        sx: {
          minHeight: '90vh',
          maxHeight: '90vh',
        },
      }}
    >
      <DialogTitle>awda</DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 0,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '50% 50%',
            gridTemplateRows: ' auto 1fr auto',
            rowGap: 3,
            justifyItems: 'center',

            width: `${matches ? '20%' : '30%'}`,
            overflow: 'auto',
            borderRight: 1,
            borderColor: '#4a148c',
          }}
          px={3}
        >
          {imagesToDisplay.map((image, key) => (
            <img
              style={{ gridColumn: `${key % 2 ? '2' : '1'}` }}
              onClick={() => changeCurrentImage(image.url, image.index)}
              src={image.url}
              alt=""
              width={130}
              height={130}
              className={`photos-container_list_element ${
                currentIndex === image.index ? 'selected' : ''
              }`}
            />
          ))}
        </Box>

        <Grid
          sx={{ width: `${matches ? '80%' : '70%'}` }}
          container
          direction={'column'}
        >
          <Grid
            md={11}
            xs={11}
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              px={4}
            >
              <IconButton
                onClick={() => scrollHorizontal('left')}
                disableRipple
                disabled={isFirstImage}
                color="primary"
                sx={{
                  borderRadius: 2,
                  '&:hover': { boxShadow: 2 },
                  height: '8vh',
                  width: '6vh',
                }}
              >
                <IoIosArrowBack />
              </IconButton>
              <img src={activeImage?.url} width={650} height={650} alt="" />
              <IconButton
                onClick={() => scrollHorizontal('right')}
                disableRipple
                disabled={isLastImage}
                color="primary"
                sx={{
                  borderRadius: 2,
                  '&:hover': { boxShadow: 2 },
                  height: '8vh',
                  width: '6vh',
                }}
              >
                <IoIosArrowForward />
              </IconButton>
            </Box>
          </Grid>
          <Grid md={1} xs={1} item>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: 1,
                borderColor: '#4a148c',
              }}
              gap={2}
            >
              <IconButton>
                <AiOutlinePlus />
              </IconButton>
              <IconButton>
                <AiOutlineMinus />
              </IconButton>

              <Box
                sx={{
                  position: 'absolute',
                  right: 30,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<AiOutlineShoppingCart />}
                  onClick={addProduct}
                >
                  Add to cart
                </Button>

                <IconButton
                  color="primary"
                  sx={{ border: '2px solid #4a148c', borderRadius: 2 }}
                >
                  <AiOutlineHeart />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  ) : (
    <Dialog
      fullScreen
      open={visible}
      onClose={closeGalleryModal}
      //TransitionComponent={Transition}
    >
      {/* <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={closeGalleryModal}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Sound
          </Typography>
          <Button autoFocus color="inherit" onClick={closeGalleryModal}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem button>
          <ListItemText primary="Phone ringtone" secondary="Titania" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText
            primary="Default notification ringtone"
            secondary="Tethys"
          />
        </ListItem>
      </List> */}
      <DialogTitle sx={{ height: '6%' }}>
        {/* <IconButton
          aria-label="close"
          onClick={closeGalleryModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            fontSize: 30,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton> */}
        <GrClose
          style={{ position: 'absolute', fontSize: 30, right: 15, top: 15 }}
        />
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={activeImage?.url} width="80%" alt={'Product'} />
        </Box>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={{ py: 1.2, width: '95%' }}
          variant="contained"
          disableRipple
          startIcon={
            <AiOutlineShoppingCart
              style={{
                position: 'absolute',
                left: 8,
                bottom: 8,
                fontSize: 30,
              }}
            />
          }
        >
          Add to cart
        </Button>
        <IconButton
          disableRipple
          color="primary"
          sx={{ border: '2px solid #4a148c', borderRadius: 2 }}
        >
          <AiOutlineHeart />
        </IconButton>
      </DialogActions>
    </Dialog>
  )
}
