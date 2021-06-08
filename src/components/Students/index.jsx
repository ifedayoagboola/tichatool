import React, {useState} from 'react'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#88304e',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        fontWeight: 'bold',
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(clas, student, name) {
    return { clas, student, name };
}

const rows = [
    createData('JS 1', 159, "Ola"),
    createData('JS 2', 237,"Wale"),
    createData('JS 3', 262, "Tobi"),
    createData('SS 1', 305, "Femi"),
    createData('SS 2', 356, "Linda"),
    createData('SS 3', 356, "Faith"),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


function Students() {
    
    const classes = useStyles();


    return (
        <div>
            <h1>Students</h1>

            <div className="pending-table">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Class</StyledTableCell>
                                <StyledTableCell align="right">No of Student</StyledTableCell>
                                <StyledTableCell align="right">Class Teacher Name</StyledTableCell>
                                <StyledTableCell align="right">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.clas}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.clas}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.student}</StyledTableCell>
                                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <button className="pending-btn">View Students</button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Students
