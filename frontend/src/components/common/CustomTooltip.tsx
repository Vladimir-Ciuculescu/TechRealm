import React from 'react'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import Grow from '@mui/material/Grow'

interface CommonTooltipProps extends TooltipProps {
  containerSpace?: number | string
  paddingSpace?: number | string
}

const CommonTooltip: React.FC<CommonTooltipProps> = styled(
  ({
    className,
    containerSpace,
    paddingSpace,
    ...props
  }: CommonTooltipProps) => (
    <Tooltip
      PopperProps={{
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, containerSpace],
            },
          },
        ],
      }}
      TransitionComponent={Grow}
      {...props}
      arrow
      classes={{ popper: className }}
    />
  ),
)(({ theme, paddingSpace }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#ffffff',
    boxShadow: 2,
  },

  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    color: 'rgba(0, 0, 0, 0.87)',
    padding: paddingSpace,
    fontSize: theme.typography.pxToRem(12),
    maxWidth: '400px',

    boxShadow: theme.shadows[2],
  },
}))

export default CommonTooltip
