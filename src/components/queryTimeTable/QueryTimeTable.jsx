import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


const QueryTimeTable = ({ rows }) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Database</TableCell>
                    <TableCell align="right">READ</TableCell>
                    <TableCell align="right">UPDATE</TableCell>
                    <TableCell align="right">DELETE</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="right">{row.read !== '-' ? (row.read + ' [ms]') : '-'}</TableCell>
                        <TableCell align="right">{row.update !== '-' ? (row.update + ' [ms]') : '-'}</TableCell>
                        <TableCell align="right">{row.delete !== '-' ? (row.delete + ' [ms]') : '-'}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default QueryTimeTable;

