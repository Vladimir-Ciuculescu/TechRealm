import { Container, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomCheckbox from '../components/common/CustomCheckbox'
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

const ManageUsersScreen: React.FC<any> = () => {
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
      id: '',
      sortable: false,
      label: null,
    },
  ]

  const columns = [
    {
      id: 'checked',
      label: 'checked',
      render: (row: any) => {
        return <Typography>awda</Typography>
      },
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
