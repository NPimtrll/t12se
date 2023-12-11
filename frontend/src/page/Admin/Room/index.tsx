import React from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(
    No: number,
    NameRoom: string,
    Capacity: number,
    Price: number,
    RoomType: string,
    Roomstatus: string,
    Dormitory: number,

) {
    return { No, NameRoom, Capacity, Price, RoomType, Roomstatus, Dormitory };
}

const rows = [
    createData(1, 'B110', 3, 1000, 'ห้องพัดลม', 'ว่าง', 1),
    createData(1, 'B110', 3, 1000, 'ห้องพัดลม', 'ว่าง', 1),


];




function Room() {
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
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell align="right">NameRoom</TableCell>
                                <TableCell align="right">Capacity</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">RoomType</TableCell>
                                <TableCell align="right">Roomstatus</TableCell>
                                <TableCell align="right">Dormitory</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.No}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.No}
                                    </TableCell>
                                    <TableCell align="right">{row.NameRoom}</TableCell>
                                    <TableCell align="right">{row.Capacity}</TableCell>
                                    <TableCell align="right">{row.Price}</TableCell>
                                    <TableCell align="right">{row.RoomType}</TableCell>
                                    <TableCell align="right">{row.Roomstatus}</TableCell>
                                    <TableCell align="right">{row.Dormitory}</TableCell>

                                    <Button variant="outlined" startIcon={<DeleteIcon />} sx={{marginLeft:3}}>
                                        Delete
                                    </Button>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>


        </React.Fragment>
    );
}

export default Room