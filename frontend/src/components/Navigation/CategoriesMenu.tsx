import TreeItem from '@mui/lab/TreeItem'
import React, { useEffect, useRef, useState } from 'react'
import { TreeView } from '@mui/lab'
import { Box, Collapse, Menu, MenuItem, Typography } from '@mui/material'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { IoTvSharp } from 'react-icons/io5'
import { GiVacuumCleaner } from 'react-icons/gi'
import { GiConsoleController } from 'react-icons/gi'
import { BsMouse2 } from 'react-icons/bs'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import SubCategoryMenu from './SubCategoryMenu'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useDispatch, useSelector } from 'react-redux'
import { visibilitySelector } from '../../redux/category_menu/selectors'
import {
  setSubMenuAction,
  toggleMenuAction,
} from '../../redux/category_menu/actions'

interface CategoryItem {
  name: string
  icon: JSX.Element
  submenu: string[]
}

const iconSize = 30
const categories: CategoryItem[] = [
  {
    name: 'Laptops, Tablets and Phones',
    icon: (
      <IoPhonePortraitOutline style={{ fontSize: iconSize, color: 'black' }} />
    ),
    submenu: ['Laptops', 'Tablets', 'Phones'],
  },
  {
    name: 'PC and Peripheral',
    icon: <BsMouse2 style={{ fontSize: iconSize, color: 'black' }} />,
    submenu: ['Mouse', 'Headphones', 'Desktop PC'],
  },
  {
    name: 'TV, audio and video',
    icon: <IoTvSharp style={{ fontSize: iconSize, color: 'black' }} />,
    submenu: ['TVs', 'Soundbar', 'Boxes'],
  },
  {
    name: 'Appliances',
    icon: <GiVacuumCleaner style={{ fontSize: iconSize, color: 'black' }} />,
    submenu: ['Frigdes', 'Vaccums', 'Ovens'],
  },
  {
    name: 'Gaming',
    icon: (
      <GiConsoleController style={{ fontSize: iconSize, color: 'black' }} />
    ),
    submenu: ['Consoles', 'Controllers', 'Games'],
  },
]

const CategoriesMenu: React.FC<any> = () => {
  const categoryRef = useRef<any>(null)
  const [offsetWidth, setOffsetWidth] = useState<number>(0)
  const [offsetHeight, setOffsetHeight] = useState<number>(0)
  const dispatch = useDispatch()
  const visibleMenu = useSelector(visibilitySelector)

  useEffect(() => {
    setOffsetWidth(categoryRef.current.offsetWidth)
    setOffsetHeight(categoryRef.current.offsetHeight)
  }, [])

  const openSubMenu = (subMenu: string[]) => {
    if (!visibleMenu) {
      dispatch(toggleMenuAction(true))
    }

    dispatch(setSubMenuAction(subMenu))
  }

  return (
    <Box>
      <SubCategoryMenu offsetWidth={offsetWidth} offsetHeight={offsetHeight} />
      <TreeView
        ref={categoryRef}
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          overflowY: 'auto',
          fontSize: 20,
          background: 'rgba(254,254,255,255)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {categories.map((category) => (
          <TreeItem
            onMouseEnter={() => openSubMenu(category.submenu)}
            nodeId="1"
            sx={{}}
            label={
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 0.5,
                  pr: 0,
                  ml: -3,
                  gap: 1.5,
                  height: 50,
                }}
              >
                {category.icon}
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 'inherit', flexGrow: 1, color: 'black' }}
                >
                  {category.name}
                </Typography>
                <ArrowForwardIosIcon sx={{ color: 'black' }} />
              </Box>
            }
          />
        ))}
      </TreeView>
    </Box>
  )
}

export default CategoriesMenu
