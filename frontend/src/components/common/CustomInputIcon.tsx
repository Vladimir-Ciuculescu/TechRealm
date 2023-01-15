import { ButtonBase, styled, TextField, useFormControl } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'

import { AccountCircle } from '@mui/icons-material'
import { IconType } from 'react-icons'
import { FaUserAlt } from 'react-icons/fa'

interface CustomInputIconProps {
  value: string
  icon: JSX.Element
  placeholder: string | undefined
  toggleIcon?: () => void
  type: string
}

const CustomInputIcon: React.FC<CustomInputIconProps> = ({
  value,
  icon,
  placeholder,
  toggleIcon,
  type,
}) => {
  const [focused, setFocused] = useState(false)

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          width: '40px',
          borderTop: `2px solid ${focused ? '#50148c' : '#e2e2e2'}`,
          borderBottom: `2px solid ${focused ? '#50148c' : '#e2e2e2'}`,
          borderLeft: `2px solid ${focused ? '#50148c' : '#e2e2e2'}`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pl: 1,
          pr: 1,
        }}
      >
        {toggleIcon ? (
          <ButtonBase disableRipple onClick={toggleIcon}>
            {icon}
          </ButtonBase>
        ) : (
          icon
        )}
      </Box>

      <TextField
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        sx={{
          border: `2px solid ${focused ? '#50148c' : '#e2e2e2'}`,
          pl: 1,
          py: 0.5,
          width: '100%',
          borderRadius: -1,
        }}
        label=""
        variant="standard"
        InputProps={{ disableUnderline: true }}
      />
    </Box>
  )
}

export default CustomInputIcon
