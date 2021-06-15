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

function createData(firstName, lastName, age) {
    return { firstName, lastName, age };
}

const rows = [
    createData("Ola", "Kunle", 10),
    createData("Wale", "Funsho", 14),
    createData( "Tobi", "James", 12),
    createData("Femi", "Adebayo", 15),
    createData("Linda", "Ikeji", 12),
    createData("Faith", "Ogedengbe", 10),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});



function StudentList() {

    const classes = useStyles();


    return (
        <div>
            <h3>Students</h3>
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
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.firstName}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.lastName}</StyledTableCell>
                                    <StyledTableCell align="right">{row.age}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <button className="pending-btn" onClick={() => window.location.href = `/admin/student/${row.firstName}`}>View Student</button>
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

export default StudentList
