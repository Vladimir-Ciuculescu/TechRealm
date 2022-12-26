import { Box, Paper, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Paper sx={{ width: '100%', position: 'absolute', bottom: 0 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="caption">Copyright &copy; TechRealm</Typography>
      </Box>
    </Paper>
  )
}

export default Footer
