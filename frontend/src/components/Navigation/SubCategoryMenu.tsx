import { Paper } from '@material-ui/core'
import { Box, Collapse, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { visibilitySelector } from '../../redux/category_menu/selectors'
import { Theme } from '@mui/material/styles'

interface SubCategoryMenuProps {
  offsetWidth: string | number
  offsetHeight: string | number
}

const icon = (
  <Paper elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme: Theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
)

const SubCategoryMenu: React.FC<SubCategoryMenuProps> = ({
  offsetWidth,
  offsetHeight,
}) => {
  const visibleSubMenu = useSelector(visibilitySelector)

  return (
    <Collapse
      orientation="horizontal"
      sx={{
        background: 'white',
        boxShadow:
          '2px, 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)',
        //borderLeft: '1px solid black',

        zIndex: 1300,
        marginLeft: `${offsetWidth}px`,
        position: 'absolute',
        height: `${offsetHeight}px`,
      }}
      in={visibleSubMenu}
    >
      <Box style={{ width: '100%', height: '100%', color: 'black' }}>
        <Typography>Laptops</Typography>
        <Typography>Tablets</Typography>
        <Typography>Phones</Typography>
      </Box>
    </Collapse>
    // <Collapse
    //   sx={{
    //     background: 'white',
    //     // boxShadow:
    //     //   '2px, 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)',
    //     zIndex: 1300,
    //     marginLeft: `${offsetWidth}px`,
    //     position: 'absolute',
    //     height: `${offsetHeight}px`,
    //   }}
    //   orientation="horizontal"
    //   in={visibleSubMenu}
    //   collapsedSize={40}
    // >
    //   {icon}
    // </Collapse>
  )
}

export default SubCategoryMenu
