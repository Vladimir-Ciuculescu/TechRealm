import { FormControl, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'

interface StyledTextFieldProps {
  startDivider?: boolean
  endDivider?: boolean
  borderColor: string
  background: string

  startAdornment?: JSX.Element
  endAdornment?: JSX.Element
}

const StyledTextField = styled(TextField)<StyledTextFieldProps>(
  ({
    startDivider,
    endDivider,
    borderColor,
    background,

    startAdornment,
    endAdornment,
  }) => ({
    '&.MuiTextField-root': {
      height: '44px',
      border: `2px solid ${borderColor}`,
      background: background,
      borderRadius: '6px',

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
  value: string | number | undefined
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
      return palette.Violet[300]
    } else {
      return palette.Gray[300]
    }
  }

  const renderBackground = () =>
    disabled ? palette.Gray[50] : palette.Base.White

  return (
    <FormControl sx={{ width: width, gap: '6px' }}>
      {label && (
        <Typography variant="TEXT_SM_MEDIUM" sx={{ color: 'Gray.700' }}>
          {label}
        </Typography>
      )}
      <StyledTextField
        type={type}
        startDivider={startDivider}
        endDivider={endDivider}
        borderColor={renderBorderColor()}
        background={renderBackground()}
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
