import { FormControl, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { CgAsterisk } from 'react-icons/cg'

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
      boxShadow: `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${boxShadow}`,
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
  error?: string | boolean
  errorMessage?: string
  disabled?: boolean
  startAdornment?: JSX.Element
  endAdornment?: JSX.Element
  width: string
  type: string
  value: string | number | undefined | null
  handleValue: (e: string) => void
  label: string
  placeholder?: string
  startDivider?: boolean
  endDivider?: boolean
  required?: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({
  error,
  errorMessage,
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
  required,
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

  const renderBoxShadowColor = () => {
    if (error && focused) {
      return palette.Error[100]
    } else if (!error && focused) {
      return palette.Violet[100]
    } else {
      return null
    }
  }

  const renderBackground = () =>
    disabled ? palette.Gray[50] : palette.Base.White

  return (
    <FormControl sx={{ width: width, gap: '8px' }}>
      {label && (
        <Typography variant="TEXT_SM_MEDIUM" sx={{ color: 'Gray.700' }}>
          {label}
          {required && (
            <CgAsterisk
              style={{
                width: '10px',
                height: '10px',
                marginTop: '-5px',
                color: palette.Error[500],
              }}
            />
          )}
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
      {error && (
        <Typography
          variant="TEXT_SM_MEDIUM"
          sx={{ color: 'Error.500', paddingLeft: '5px' }}
        >
          {errorMessage}
        </Typography>
      )}
    </FormControl>
  )
}

export default CustomInput
