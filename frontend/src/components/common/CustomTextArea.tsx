import { FormControl, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { CgAsterisk } from 'react-icons/cg'

interface StyledTextFieldProps {
  borderColor: string
  background: string
  boxShadowColor: string
}

const StyledTextField = styled(TextField)<StyledTextFieldProps>(
  ({ borderColor, background, boxShadowColor }) => ({
    '&.MuiTextField-root': {
      border: `2px solid ${borderColor}`,
      background: background,
      borderRadius: '6px',
      boxShadow: `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${boxShadowColor}`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '10px',
    },
  }),
)

interface CustomTextAreaProps {
  width: string
  label: string
  error?: string
  disabled?: boolean
  value: string
  handleValue: (e: any) => void
  required?: boolean
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  width,
  label,
  error,
  disabled,
  value,
  handleValue,
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
        value={value}
        onChange={(e) => handleValue(e.target.value)}
        multiline
        rows={5}
        variant="standard"
        borderColor={renderBorderColor()}
        boxShadowColor={renderBoxShadowColor()}
        background={renderBackground()}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        InputProps={{
          disableUnderline: true,
        }}
      />
      {error && (
        <Typography
          variant="TEXT_SM_MEDIUM"
          sx={{ color: 'Error.500', paddingLeft: '5px' }}
        >
          {error}
        </Typography>
      )}
    </FormControl>
  )
}

export default CustomTextArea
