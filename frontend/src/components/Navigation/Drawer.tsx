import { Badge, Box, List, ListItem, ListItemAvatar, Link } from '@mui/material'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { NavigationItem } from '../../interfaces/NavigationItem'
import NavItems from './NavItems'

interface DrawerComponentProps {
  setToggleDrawer: () => void
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  setToggleDrawer,
}) => {
  const navigate = useNavigate()

  const navLinks = NavItems()

  return (
    <Box onClick={setToggleDrawer} sx={{ textAlign: 'center' }}>
      <List dense={false}>
        {navLinks.map((page: NavigationItem, key: number) => (
          <ListItem
            sx={{ marginBottom: 1 }}
            dense={false}
            key={key}
            disablePadding
            secondaryAction={<MdOutlineKeyboardArrowRight size={25} />}
          >
            <ListItemAvatar>
              {page.badgeValue ? (
                <Badge badgeContent={page.badgeValue} color="error">
                  {page.icon}
                </Badge>
              ) : (
                page.icon
              )}
            </ListItemAvatar>

            <Link
              href={page.path}
              sx={{ textDecoration: 'none' }}
              onClick={() => navigate(page.path)}
            >
              {page.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default DrawerComponent
