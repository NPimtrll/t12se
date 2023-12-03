import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

function Room() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xl">
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
    </Container>
  </React.Fragment>
  )
}

export default Room