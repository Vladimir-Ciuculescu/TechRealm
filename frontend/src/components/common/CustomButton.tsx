import React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { Button, CircularProgress } from '@mui/material'

interface StyledButtonProps {
  borderColor: string
  variant: 'text' | 'outlined' | 'contained' | undefined
  loading?: boolean
  sx: any
}

const StyledButton = styled(Button)<StyledButtonProps>(
  ({ variant, sx, borderColor, loading }) => ({
    '&.MuiButton-root': {
      padding: '10px 18px',
      boxShadow:
        variant === 'text' ? 'none' : '0px 1px 2px rgba(16, 24, 40, 0.05)',
      textTransform: 'none',
      borderColor: borderColor,
      borderWidth: variant !== 'text' ? '1px' : 'none',
      borderStyle: variant !== 'text' ? 'solid' : 'none',
      opacity: loading ? 0.5 : 1,
      ...sx,
    },
  }),
)

interface CustomButtonProps {
  onClick: () => void
  variant: 'text' | 'outlined' | 'contained' | undefined
  children: JSX.Element
  loading?: boolean
  sx: any
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  variant,
  children,
  loading,
  sx,
}) => {
  const { palette }: any = useTheme()

  const renderBorderColor = () =>
    variant === 'contained' ? sx.bgcolor : palette.Gray[300]

  return (
    <StyledButton
      disableRipple
      variant={variant}
      onClick={onClick}
      loading={loading}
      borderColor={renderBorderColor()}
      sx={{
        ...sx,
        ':hover': {
          bgcolor:
            variant === 'text' || variant === 'outlined'
              ? 'inherit'
              : sx.bgcolor,
          borderColor: variant === 'text' ? 'transparent' : sx.borderColor,
        },
      }}
    >
      {loading ? (
        <CircularProgress size={24} sx={{ color: 'Base.White' }} />
      ) : (
        children
      )}
    </StyledButton>
  )
}

export default CustomButton
