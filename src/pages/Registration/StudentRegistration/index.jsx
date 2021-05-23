import React from 'react'



import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                margin: theme.spacing(1)
               },
        },
    },
   studentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: "800px",
        [theme.breakpoints.down('sm')]: {
            height: '600px'
           },
    },
   studentInput: {
        padding: '10px',
        width: '500px',
        [theme.breakpoints.down('sm')]: {
           width: '100%',
           padding: '5px'
          },
    },
   studentButton: {
        padding: '10px',
        width: '500px',
        marginLeft: '6%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '5px'
           },
    },
   studentImage: {
        width: '100px',
        height: '100px'
    }
}));



function StudentLogin() {



    const classes = useStyles();



    return (
        <div className={classes.studentContainer}>
            <img src="https://res.cloudinary.com/doouwbecx/image/upload/v1621703684/graduate-student-hand-drawn-sketch-icon-graduate-student-hand-drawn-outline-doodle-icon-student-drawing_csp56840697_llrnam.jpg" className={classes.studentImage} />
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField id="outlined-basic" label="Enter Email " variant="outlined" className={classes.studentInput} />
                </div>

                <div>
                    <TextField id="outlined-basic" label="Enter Password" variant="outlined" className={classes.studentInput} />
                </div>

                <Button variant="contained" color="primary" className={classes.studentButton}>
                    Primary
                </Button>
            </form>
        </div>
    )
}

export default StudentLogin
