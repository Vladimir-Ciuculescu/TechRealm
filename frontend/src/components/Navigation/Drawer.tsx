import { Badge, Box, List, ListItem, ListItemAvatar, Link } from '@mui/material'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import NavigationLinks from './NavItems'

interface DrawerComponentProps {
  setToggleDrawer: () => void
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  setToggleDrawer,
}) => {
  const navigate = useNavigate()

  const navLinks = NavigationLinks()

  return (
    <Box onClick={setToggleDrawer} sx={{ textAlign: 'center' }}>
      <List dense={false}>
        {navLinks.map((page, key) => (
          <ListItem
            sx={{ marginBottom: 1 }}
            dense={false}
            key={key}
            disablePadding
            secondaryAction={<MdOutlineKeyboardArrowRight size={25} />}
          >
            <ListItemAvatar>
              {page.badge ? (
                <Badge badgeContent={page.badge.value} color="error">
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
