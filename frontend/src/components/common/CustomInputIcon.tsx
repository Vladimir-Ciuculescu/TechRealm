import {
  ButtonBase,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

interface CustomInputIconProps {
  value: string
  icon: JSX.Element
  placeholder: string | undefined
  type: string
  toggleIcon?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error: string | undefined | boolean
  isValid?: boolean | undefined
  touched?: boolean
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
  const borderColor = () => {
    return value === '' && !error ? '#e2e2e2' : error ? '#d3302f' : '#339933'
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
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
            borderTop: `2px solid ${borderColor()}`,
            borderBottom: `2px solid ${borderColor()}`,
            borderLeft: `2px solid ${borderColor()}`,
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
          placeholder={placeholder}
          sx={{
            border: `2px solid ${borderColor()}`,
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

      {isValid ? null : (
        <FormHelperText sx={{ color: '#d3302f', fontSize: 13 }}>
          {error}
        </FormHelperText>
      )}
    </Box>
  )
}

export default CustomInputIcon
