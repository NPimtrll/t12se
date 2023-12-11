import React from 'react'
import Box from '@mui/material/Box';
import "../../../App.css";
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function addromm() {

  // const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };

  return (
    <React.Fragment>
      <CssBaseline />

      <Box
        sx={{
          bgcolor: "#cfd8dc",
          marginTop: 10,
          marginBottom: 3,
          paddingTop: 5,
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          width: 1000,
          height: 800,
          marginLeft: 35
        }}
      >

        <Typography variant="h4" gutterBottom marginLeft={2} marginTop={2} >
          ADDROOM
        </Typography>

        <Box component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div >
            <TextField
              required
              id="outlined-required"
              label="Name Room"
              defaultValue="Text"
            />
            <TextField
              required
              id="outlined-required"
              label="Capacity"
              defaultValue="Text"
            />
            <TextField
              required
              id="outlined-required"
              label="Price"
              defaultValue="Number" />

          </div>

          <Box sx={{ minWidth: 100, marginTop: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">RoomType</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="RoomType"
              // onChange={handleChange}
              >
                <MenuItem value={10}>ห้องเเอร์</MenuItem>
                <MenuItem value={20}>ห้องพัดลม</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 100, marginTop: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Roomstatus</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Roomstatus"
              // onChange={handleChange}
              >
                <MenuItem value={10}>ว่าง</MenuItem>
                <MenuItem value={20}>ไม่ว่าง</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 100, marginTop: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Dormitory</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Dormitory"
              // onChange={handleChange}
              >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Stack direction="row" spacing={2} sx={{marginTop:5,marginLeft:110}}>
            
            <Button variant="contained" color="success" >
              Add
            </Button>
            
          </Stack>

        </Box>

      </Box>

    </React.Fragment>
  );
}

export default addromm