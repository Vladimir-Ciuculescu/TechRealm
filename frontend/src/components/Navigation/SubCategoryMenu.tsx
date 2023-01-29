import { Box, Collapse, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import {
  subMenuSelector,
  visibilitySelector,
} from '../../redux/category_menu/selectors'
import Link from '@mui/material/Link'

interface SubCategoryMenuProps {
  offsetWidth: string | number
  offsetHeight: string | number
}

const SubCategoryMenu: React.FC<SubCategoryMenuProps> = ({
  offsetWidth,
  offsetHeight,
}) => {
  const visibleSubMenu = useSelector(visibilitySelector)
  const subMenu = useSelector(subMenuSelector)

  console.log(subMenu)

  return (
    <Collapse
      orientation="horizontal"
      sx={{
        background: 'white',
        boxShadow:
          '2px, 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)',

        zIndex: 1300,
        marginLeft: `${offsetWidth}px`,
        position: 'absolute',
        height: `${offsetHeight}px`,
      }}
      in={visibleSubMenu}
    >
      <Stack direction={'column'} gap={2} px={2} py={2}>
        {subMenu.map((category: string) => (
          <Link href="#" underline="hover">
            {category}
          </Link>
        ))}
      </Stack>
    </Collapse>
  )
}

export default SubCategoryMenu
