import React from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { Check01Icon, Minus01Icon } from '../../assets/icons/index'

interface CustomCheckboxProps {
  label?: JSX.Element
  checked: boolean
  toggleCheck: () => void
  indeterminate?: boolean
  disabled?: boolean
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  toggleCheck,
  indeterminate,
  disabled,
}) => {
  const { palette }: any = useTheme()

  const renderBackgroundColor = () =>
    checked ? palette.Violet[50] : palette.Base.White

  const renderBorderColor = () =>
    checked || indeterminate ? palette.Violet[600] : palette.Gray[300]

  const renderOpacity = () => (disabled ? 0.5 : 1)

  return (
    <Stack direction="row" gap="12px">
      <Box
        sx={{
          width: '20px',
          height: '20px',
          background: 'red',
          borderRadius: '4px',
          bgcolor: renderBackgroundColor(),
          borderColor: renderBorderColor(),
          opacity: renderOpacity(),
          borderWidth: '1.5px',
          borderStyle: 'solid',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconButton disableRipple disabled={disabled} onClick={toggleCheck}>
          {indeterminate ? (
            <Minus01Icon style={{ stroke: palette.Violet[600] }} />
          ) : checked ? (
            <Check01Icon
              style={{
                stroke: palette.Violet[600],
                width: '16px',
                height: '16px',
              }}
            />
          ) : null}
        </IconButton>
      </Box>
      <Typography
        variant="TEXT_SM_MEDIUM"
        sx={{ color: 'GrayTrue.900', opacity: renderOpacity() }}
      >
        {label}
      </Typography>
    </Stack>
  )
}

export default CustomCheckbox
