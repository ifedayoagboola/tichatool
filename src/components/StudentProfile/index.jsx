import React, { useState } from 'react'

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

function createData(subject, testOneScore,testTwoScore, examinationScore, grade) {
    return { subject, testOneScore, testTwoScore, examinationScore, grade };
}

const rows = [
    createData("Mathematics", 4, 10, 20, "A1"),
    createData("English", 7, 14, 23, "B2"),
    createData("Biology", 8, 12, 50, "C3"),
    createData("Commerce", 9, 15, 16, "D4"),
    createData("Account", 12, 12, 28, "D5"),
    createData("Physics", 3, 10, 42, "D7"),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});



function StudentProfile(props) {

    const classes = useStyles();

    const studentId = props.match.params.studentId


    return (
        <div>
            <h3 className="profile-header">Profile of {studentId}</h3>

            <div className="teacher-profile">
                <div className="teacher-div1">
                    <img src="https://res.cloudinary.com/doouwbecx/image/upload/v1623246908/Ellipse_1_foqxly.png" />

                    <div className="teacher-mini">
                        <h3>CONTACT</h3>
                        <h6>Address</h6>
                        <p>Loreium Ipsium address</p>

                        <h6>Phone</h6>
                        <p>Loreium Ipsium address</p>

                        <h6>Email</h6>
                        <p>Loreium Ipsium address</p>

                        <h6>LinkedIn</h6>
                        <p>Loreium Ipsium address</p>
                    </div>
                </div>

                <div className="teacher-div2">
                    <h2>{studentId}</h2>

                    <h3>Profile</h3>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text
                        commonly used to demonstrate the visual form of a document
                        or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                    </p>

                    <h3>Result</h3>

                    <div>
                        <TableContainer component={Paper} style={{ height: "400px", marginBottom: '2%'}}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Subject</StyledTableCell>
                                        <StyledTableCell align="right">1<sup>st</sup> Test</StyledTableCell>
                                        <StyledTableCell align="right">2<sup>nd</sup> Test</StyledTableCell>
                                        <StyledTableCell align="right">Examination</StyledTableCell>
                                        <StyledTableCell align="right">Grade</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.subject}>
                                             <StyledTableCell component="th" scope="row">
                                                {row.subject}
                                            </StyledTableCell>
                                            <StyledTableCell component="th" scope="row">
                                                {row.testOneScore}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.testTwoScore}</StyledTableCell>
                                            <StyledTableCell align="right">{row.examinationScore}</StyledTableCell>
                                            <StyledTableCell align="right">{row.grade}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentProfile
