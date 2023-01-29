import TreeItem from '@mui/lab/TreeItem'
import React from 'react'
import { TreeView } from '@mui/lab'
import { Box, Typography } from '@mui/material'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { IoTvSharp } from 'react-icons/io5'
import { GiVacuumCleaner } from 'react-icons/gi'
import { GiConsoleController } from 'react-icons/gi'
import { BsMouse2 } from 'react-icons/bs'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

interface CategoryItem {
  name: string
  icon: JSX.Element
}

const iconSize = 30
const categories: CategoryItem[] = [
  {
    name: 'Laptops, Tablets and Phones',
    icon: (
      <IoPhonePortraitOutline style={{ fontSize: iconSize, color: 'black' }} />
    ),
  },
  {
    name: 'PC and Peripheral',
    icon: <BsMouse2 style={{ fontSize: iconSize, color: 'black' }} />,
  },
  {
    name: 'TV, audio and video',
    icon: <IoTvSharp style={{ fontSize: iconSize, color: 'black' }} />,
  },
  {
    name: 'Appliances',
    icon: <GiVacuumCleaner style={{ fontSize: iconSize, color: 'black' }} />,
  },
  {
    name: 'Gaming',
    icon: (
      <GiConsoleController style={{ fontSize: iconSize, color: 'black' }} />
    ),
  },
]

const CategoriesMenu: React.FC<any> = () => {
  return (
    <TreeView
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
          nodeId="1"
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
            </Box>
          }
        />
      ))}
    </TreeView>
  )
}

export default CategoriesMenu
