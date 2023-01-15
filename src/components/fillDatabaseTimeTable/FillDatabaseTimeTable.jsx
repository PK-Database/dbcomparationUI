import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


const FillDatabaseTimeTable = ({ postgresRow, mongoRow, cassandraRow, dynamoRow }) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Database</TableCell>
                    <TableCell align="right">SAVE_ALL</TableCell>
                    <TableCell align="right">DELETE_ALL</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {[mongoRow, postgresRow, cassandraRow, dynamoRow].map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row"> {row.id} </TableCell>
                        <TableCell align="right">{row.saveAll !== '-' ? row.saveAll : '-'}</TableCell>
                        <TableCell align="right">{row.deleteAll !== '-' ? row.deleteAll : '-'}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default FillDatabaseTimeTable;

