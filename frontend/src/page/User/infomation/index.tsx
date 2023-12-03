import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';




function infomation() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: "#cfd8dc",
            height: "100vh",
            marginTop: 10,
            marginBottom: 3,
            paddingTop: 5,
          }}
        />
      </Container>
    </React.Fragment>
  );
}

export default infomation