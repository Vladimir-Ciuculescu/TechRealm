import React, { useEffect, useState } from 'react'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import Grow from '@mui/material/Grow'
import { useSelector } from 'react-redux'
import { isUserLoggedSelector } from '../../redux/user/selectors'

interface CommonTooltipProps extends TooltipProps {
  containerSpace?: number | string
  paddingSpace?: number | string
  tooltipWidth?: number | string | null
}

const CommonTooltip: React.FC<CommonTooltipProps> = styled(
  ({
    className,
    containerSpace,
    paddingSpace,
    tooltipWidth,
    ...props
  }: CommonTooltipProps) => {
    const [open, setOpen] = useState(false)
    const isLogged = useSelector(isUserLoggedSelector)

    useEffect(() => {
      console.log('INTRA AICI:', isLogged)
      if (!isLogged) {
        setOpen(false)
      }
    }, [isLogged])

    return (
      <Tooltip
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
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
    )
  },
)(({ theme, paddingSpace, tooltipWidth }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#ffffff',
    boxShadow: 2,
  },

  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    color: 'rgba(0, 0, 0, 0.87)',
    padding: paddingSpace,
    fontSize: theme.typography.pxToRem(12),
    //maxWidth: '400px',
    width: tooltipWidth,
    boxShadow: theme.shadows[2],
  },
}))

export default CommonTooltip
