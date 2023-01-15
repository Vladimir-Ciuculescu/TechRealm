import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import { AccountCircle } from '@mui/icons-material'
import { IconType } from 'react-icons'
import { FaUserAlt } from 'react-icons/fa'

interface CustomInputIconProps {
  value: string
  icon: JSX.Element
  placeholder: string | undefined
}

const CustomInputIcon: React.FC<CustomInputIconProps> = ({
  value,
  icon,
  placeholder,
}) => {
  return (
    <Box
      sx={{
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          width: '40px',
          borderTop: '2px solid #e2e2e2',
          borderBottom: '2px solid #e2e2e2',
          borderLeft: '2px solid #e2e2e2',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pl: 1,
          pr: 1,
        }}
      >
        {icon}
      </Box>
      <TextField
        placeholder={placeholder}
        sx={{
          border: '2px solid #e2e2e2',
          pl: 1,
          py: 0.5,
          width: '100%',
        }}
        label=""
        variant="standard"
        InputProps={{ disableUnderline: true }}
      />
    </Box>
  )
}

export default CustomInputIcon
