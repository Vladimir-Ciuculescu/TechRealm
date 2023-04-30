import React from 'react'
import { Navigate } from 'react-router-dom'
import { ROOT_PATH } from '../../constants/paths'
import { Roles } from '../../enums/Roles'

interface CustomRouteProps {
  role: Roles
  rolesAllowed: Roles[]

  children: JSX.Element
}

const ProtectedRoute: React.FC<CustomRouteProps> = ({
  role,
  rolesAllowed,

  children,
}) => {
  const hasAccess = (rolesAllowed: Roles[], role: Roles) => {
    const isAllowed = rolesAllowed.includes(role)
    if (!isAllowed) {
      localStorage.setItem('redirect', 'true')
    }

    return isAllowed
  }

  return hasAccess(rolesAllowed, role) ? children : <Navigate to={ROOT_PATH} />
}

export default ProtectedRoute
