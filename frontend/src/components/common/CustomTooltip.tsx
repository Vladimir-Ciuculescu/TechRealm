import React from 'react'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import Grow from '@mui/material/Grow'

const CustomToolTip: React.FC<any> = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip
      TransitionComponent={Grow}
      {...props}
      arrow
      classes={{ popper: className }}
    />
  ),
)(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    padding: 0,
  },
}))

export default CustomToolTip
