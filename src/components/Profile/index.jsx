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



function Profile() {

    const classes = useStyles();



    return (
        <div>
            <h3 className="profile-header">Profile of </h3>

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
                        <h2>Username</h2>

                        <h3>Profile</h3>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text 
                            commonly used to demonstrate the visual form of a document 
                            or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                        </p>

                        <h3>Career</h3>
                        <ul>
                            <li>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</li>
                            <li>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</li>
                            <li>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</li>
                            <li>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</li>
                            <li>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</li>
                        </ul>

                        <h3>Academic</h3>
                        <ul>
                            <li>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</li>
                            <li>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</li>
                            <li>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</li>
                            <li>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</li>
                            <li>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Profile
