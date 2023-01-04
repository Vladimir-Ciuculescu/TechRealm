import { createTheme } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[900],
    },
  },
})

theme.typography.h4 = {
  fontSize: '0.9rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
}

export default theme
