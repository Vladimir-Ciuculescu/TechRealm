import { Roles } from '../enums/Roles'

export interface NavigationItem {
  title: string
  path: string
  icon: JSX.Element
  tooltipWidt?: number | null
  tooltipContent: JSX.Element
  badgeValue: number | null
  tooltipPaddingSpace: number | string
  tooltipWidth?: number | null
  visibleFor: Roles[]
}
