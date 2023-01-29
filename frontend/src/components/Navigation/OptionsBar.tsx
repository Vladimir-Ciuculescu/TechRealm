import {
  AppBar,
  Box,
  Button,
  Collapse,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenuAction } from '../../redux/category_menu/actions'
import { visibilitySelector } from '../../redux/category_menu/selectors'
import CategoriesMenu from './CategoriesMenu'

const OptionsBar: React.FC<any> = () => {
  const [toggleProductsMenu, setToggleProductsMenu] = useState<boolean>(false)
  const dispatch = useDispatch()
  const visibleSubMenu = useSelector(visibilitySelector)

  const closeProductsMenu = () => {
    setToggleProductsMenu(false)
    dispatch(toggleMenuAction(false))
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          boxShadow: '0px 0px 0px 0px',
          background:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(175,2,85,1) 35%, rgba(0,212,255,1) 100%);',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ mx: 3, height: '100%' }}>
            <Box
              sx={{
                height: '75%',
                borderTopLeftRadius: 1,
                borderTopRightRadius: 1,
                mt: 2,
                overflow: 'auto',
                border: '0px solid transparent',
                background: toggleProductsMenu
                  ? 'rgba(254,254,255,255)'
                  : 'inherit',
                '&:hover': {
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                },
              }}
            >
              <Button
                sx={{
                  border: '2px solid transparent',
                  color: 'black ',
                  background: 'white',
                  '&:hover': {
                    background: 'white',
                  },
                }}
                onMouseEnter={() => setToggleProductsMenu(true)}
                startIcon={<IoMdMenu />}
              >
                Products
              </Button>
              <Collapse
                onMouseLeave={closeProductsMenu}
                sx={{
                  position: 'absolute',
                  mt: 1,
                  background: 'white',
                  boxShadow:
                    '0px, 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)',
                  zIndex: 1300,
                }}
                in={toggleProductsMenu}
              >
                <CategoriesMenu />
              </Collapse>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default OptionsBar
