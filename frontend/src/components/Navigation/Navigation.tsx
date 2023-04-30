import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { getCurrentUserApi } from '../../services/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { isUserLoggedSelector, userSelector } from '../../redux/user/selectors'
import { setUserAction } from '../../redux/user/actions'
import ProtectedRoute from './ProtectedRoute'
import { routes } from './Routes'

const Navigation = () => {
  const { token, role } = useSelector(userSelector)
  const isLogged = useSelector(isUserLoggedSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    const getCurrentUser = async () => {
      const data = await getCurrentUserApi(token)
      const user = { ...data, token: token }
      dispatch(setUserAction(user))
    }

    if (isLogged) {
      getCurrentUser()
    }
  }, [])

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          path={route.path}
          element={
            <ProtectedRoute role={role} rolesAllowed={route.rolesAllowed}>
              {route.element}
            </ProtectedRoute>
          }
        />
      ))}
    </Routes>
  )
}

export default Navigation
