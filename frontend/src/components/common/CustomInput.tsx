import { FormControl, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'

interface StyledTextFieldProps {
  startDivider?: boolean
  endDivider?: boolean
  borderColor: string
  background: string
  boxShadow: string
  startAdornment?: JSX.Element
  endAdornment?: JSX.Element
}

const StyledTextField = styled(TextField)<StyledTextFieldProps>(
  ({
    startDivider,
    endDivider,
    borderColor,
    background,
    boxShadow,
    startAdornment,
    endAdornment,
  }) => ({
    '&.MuiTextField-root': {
      height: '44px',
      border: `2px solid ${borderColor}`,
      background: background,
      borderRadius: '6px',
      boxShadow: `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${boxShadow}`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: !startAdornment ? '20px' : '0px',
      paddingRight: !endAdornment ? '20px' : '0px',
    },

    '& .MuiInputAdornment-positionStart': {
      padding: `22px ${startDivider ? '15px' : '5px'} 22px 15px`,

      borderRight: `${startDivider ? `2px solid ${borderColor}` : 'inherit'}`,
    },
    '& .MuiInputAdornment-positionEnd': {
      padding: `22px 15px 22px 15px`,
      borderLeft: `${endDivider ? `2px solid ${borderColor}` : 'inherit'}`,
    },
  }),
)

interface CustomInputProps {
  error?: boolean
  disabled?: boolean
  startAdornment?: JSX.Element
  endAdornment?: JSX.Element
  width: string
  type: string
  value: string
  handleValue: (e: string) => void
  label: string
  placeholder?: string
  startDivider?: boolean
  endDivider?: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({
  error,
  disabled,
  startAdornment,
  startDivider,
  endAdornment,
  endDivider,
  placeholder,
  value,
  handleValue,
  type,
  width,
  label,
}) => {
  const [focused, setFocused] = useState(false)
  const { palette }: any = useTheme()

  const renderBorderColor = () => {
    if (error) {
      return palette.Error[300]
    } else if (focused) {
      return palette.Helix[300]
    } else {
      return palette.GrayTrue[300]
    }
  }

  const renderBoxShadowColor = () => {
    if (error && focused) {
      return palette.Error[100]
    } else if (!error && focused) {
      return 'rgba(212, 179, 109, 0.08)'
    } else {
      return null
    }
  }

  const renderBackground = () =>
    disabled ? palette.GrayTrue[50] : palette.Base.White

  return (
    <FormControl sx={{ width: width, gap: '6px' }}>
      {label && (
        <Typography variant="TEXT_SM_MEDIUM" sx={{ color: 'GrayTrue.700' }}>
          {label}
        </Typography>
      )}
      <StyledTextField
        type={type}
        startDivider={startDivider}
        endDivider={endDivider}
        borderColor={renderBorderColor()}
        background={renderBackground()}
        boxShadow={renderBoxShadowColor()}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        variant="standard"
        value={value}
        onChange={(e) => handleValue(e.target.value)}
        InputProps={{
          disableUnderline: true,
          startAdornment: startAdornment || null,
          endAdornment: endAdornment || null,
        }}
      />
    </FormControl>
  )
}

export default CustomInput
