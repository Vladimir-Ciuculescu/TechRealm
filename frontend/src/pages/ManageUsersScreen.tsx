import { ButtonGroup, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import CustomTable from '../components/common/CustomTable'
import { ROWS_PER_PAGE_OPTIONS } from '../consts/filters/filters'
import { FilterObject } from '../interfaces/FilterObject'
import { HeadCell } from '../interfaces/HeaderCell'
import { setUsersAction } from '../redux/manage_users/actions'
import {
  filterObjectSelector,
  usersSelector,
} from '../redux/manage_users/selectors'
import { getUsersApi } from '../services/userApi'
import { User } from '../interfaces/User'
import { BiCheck } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { FaUserTimes, FaUserShield } from 'react-icons/fa'
import { IoTrashBinSharp } from 'react-icons/io5'

const ManageUsersScreen: React.FC<any> = () => {
  const { palette }: any = useTheme()
  const dispatch = useDispatch()
  const filterObject = useSelector(filterObjectSelector)
  const users = useSelector(usersSelector)
  const [rowsPerPage, setRowsPerPage] = useState(filterObject.rowsPerPage)
  const [page, setPage] = useState(1)

  const getUsers = async () => {
    const result = await getUsersApi()

    dispatch(setUsersAction(result))
  }

  useEffect(() => {
    getUsers()
  }, [])

  const getData = async (filterObject: FilterObject) => {
    const result = await getUsersApi()
  }

  const headers: HeadCell[] = [
    {
      id: 'firstName',
      sortable: true,
      label: (
        <Typography sx={{ color: palette.Base.White }}>First name</Typography>
      ),
    },
    {
      id: 'lastName',
      sortable: true,
      label: (
        <Typography sx={{ color: palette.Base.White }}>Last name</Typography>
      ),
    },
    {
      id: 'email',
      sortable: true,
      label: <Typography sx={{ color: palette.Base.White }}>Email</Typography>,
    },
    {
      id: 'role',
      sortable: true,
      label: <Typography sx={{ color: palette.Base.White }}>Admin</Typography>,
    },
    {
      id: 'actions',
      sortable: false,
      label: (
        <Typography sx={{ color: palette.Base.White }}>Actions</Typography>
      ),
    },
  ]

  const columns = [
    {
      id: 'firstName',
      label: 'First Name ',
      render: (row: User) => {
        return <Typography>{row.firstName}</Typography>
      },
    },
    {
      id: 'lastName',
      label: 'Last Name ',
      render: (row: User) => {
        return <Typography>{row.lastName}</Typography>
      },
    },
    {
      id: 'email',
      label: 'Email',
      render: (row: User) => {
        return <Typography>{row.email}</Typography>
      },
    },
    {
      id: 'role',
      label: 'Role',
      render: (row: User) => {
        return (
          <>
            {row.role === 'admin' ? (
              <BiCheck
                style={{
                  width: '25px',
                  height: '25px',
                  color: palette.Success[500],
                }}
              />
            ) : (
              <IoMdClose
                style={{
                  width: '25px',
                  height: '25px',
                  color: palette.Error[500],
                }}
              />
            )}
          </>
        )
      },
    },
    {
      id: 'actions',
      label: 'Actions',
      render: (row: User) => (
        <Stack direction="row" gap="16px">
          {row.role === 'admin' ? (
            <FaUserTimes
              style={{
                color: palette.Violet[500],
                width: '20px',
                height: '20px',
              }}
            />
          ) : (
            <FaUserShield
              style={{
                color: palette.Violet[500],
                width: '20px',
                height: '20px',
              }}
            />
          )}
          <IoTrashBinSharp
            style={{
              width: '20px',
              height: '20px',
              color: palette.Violet[500],
            }}
          />
        </Stack>
      ),
    },
  ]

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Stack flexDirection="column" gap={7}>
        <Typography variant="h3" sx={{ fontFamily: 'Inter' }}>
          Users
        </Typography>

        <Grid container direction="column" item md={12} gap="24px">
          <Grid item>
            <CustomTable
              pages={10}
              rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              data={users}
              getData={getData}
              columns={columns}
              headers={headers}
              page={page}
              setPage={setPage}
            />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  )
}

export default ManageUsersScreen
