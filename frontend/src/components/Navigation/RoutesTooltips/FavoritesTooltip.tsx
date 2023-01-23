import { Box, Typography } from '@mui/material'
import React from 'react'

const FavoritesTooltip: React.FC<any> = () => {
  return (
    <Box sx={{ px: 2, py: 1 }}>
      <Typography>Add your favourite products here !</Typography>
    </Box>
  )
}

export default FavoritesTooltip
