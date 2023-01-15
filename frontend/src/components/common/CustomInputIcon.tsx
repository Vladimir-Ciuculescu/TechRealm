import {
  ButtonBase,
  styled,
  TextField,
  Typography,
  useFormControl,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { ChangeEventHandler, useEffect, useState } from 'react'

import { AccountCircle } from '@mui/icons-material'
import { IconType } from 'react-icons'
import { FaUserAlt } from 'react-icons/fa'

interface CustomInputIconProps {
  value: string
  icon: JSX.Element
  placeholder: string | undefined
  type: string
  toggleIcon?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error: string | undefined | boolean
  isValid?: boolean | undefined
}

const CustomInputIcon: React.FC<CustomInputIconProps> = ({
  value,
  icon,
  placeholder,
  toggleIcon,
  type,
  onChange,
  error,
  isValid,
}) => {
  const [focused, setFocused] = useState(false)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
          value={value}
          onChange={onChange}
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
      {/* {error && <Typography>{error}</Typography>} */}
      {isValid ? null : <Typography sx={{ color: 'red' }}>{error}</Typography>}
    </Box>
  )
}

export default CustomInputIcon
