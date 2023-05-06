import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Paper from '@mui/material/Paper'
import { visuallyHidden } from '@mui/utils'
import { useTheme } from '@mui/material/styles'
import { Grid, Pagination, Typography } from '@mui/material'
import CustomSelect from './CustomSelect'
import { Option } from '../../interfaces/Options'
import { FilterObject } from '../../interfaces/FilterObject'

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

type Order = 'asc' | 'desc'

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number,
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

interface TableHeaderProps {
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
  headers: any[]
}

const TableHeader: React.FC<TableHeaderProps> = ({
  order,
  orderBy,
  onRequestSort,
  headers,
}) => {
  const { palette }: any = useTheme()
  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }

  return (
    <TableHead sx={{ background: palette.Violet[600] }}>
      <TableRow>
        {headers.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.sortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                sx={{
                  '& .MuiTableSortLabel-icon': {
                    color: `${palette.Base.White} !important`,
                  },
                }}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

interface CustomTablePros {
  rowsPerPageOptions: number[]
  rowsPerPage: number
  setRowsPerPage: (e: any) => void
  data: any[]
  columns: any[]
  headers: any[]

  pages: number
  page: number
  setPage: (e: number) => void
  getData: (e: FilterObject) => void
}

const CustomTable: React.FC<CustomTablePros> = ({
  data,
  columns,
  headers,
  rowsPerPage,
  setRowsPerPage,
  rowsPerPageOptions,
  getData,
  pages,
  page,
  setPage,
}) => {
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<string>('calories')
  const [selected, setSelected] = React.useState<readonly string[]>([])
  const options = rowsPerPageOptions.map((item) => ({
    label: item.toString(),
    value: item,
  }))

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string,
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.name)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const isSelected = (name: any) => selected.indexOf(name) !== -1

  let sortedData = stableSort(data, getComparator(order, orderBy))

  useEffect(() => {
    const filterObject = {
      rowsPerPage: rowsPerPage,
      page: page,
    }

    getData(filterObject)
  }, [rowsPerPage, page])

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
              headers={headers}
            />

            <TableBody>
              {sortedData.map((row, index) => {
                const isItemSelected = isSelected(row.name)
                const labelId = `enhanced-table-checkbox-${index}`
                return (
                  <TableRow
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                  >
                    {columns.map((column) => {
                      const cellContent = column.render
                        ? column.render(row)
                        : row[column.id]
                      return (
                        <TableCell
                          component="th"
                          id={labelId}
                          key={`${row.id}-${column.id}`}
                        >
                          {cellContent}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid
          direction="row"
          container
          alignItems="center"
          justifyContent="center"
          gap="16px"
        >
          <Grid item>
            <Typography variant="TEXT_SM_MEDIUM">Rows per page</Typography>
          </Grid>
          <Grid item>
            <CustomSelect
              options={options}
              value={rowsPerPage}
              onChange={(e: any) => setRowsPerPage(e.value)}
              alignSingleValueText
              width="50px"
            />
          </Grid>
          <Grid item>
            <Pagination
              page={page}
              onChange={(e, value) => setPage(value)}
              sx={{
                height: '72px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                '& .MuiPagination-ul': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '& > *': {
                    margin: '0 4px',
                  },
                },
              }}
              count={pages}
              shape="rounded"
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default CustomTable
