import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./overview.css"

import { HorizontalBar, Bar } from 'react-chartjs-2';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.text.secondary,
        height: '100px'
    },
}));



function Overview() {
    const classes = useStyles();



    const state = {
        labels: ['Js 1', 'js 2', 'js 3', 'ss 1', 'ss 2', 'ss 3'],
        datasets: [
          {
            label: 'Class Information',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 10,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
    }
    


    return (
        <div>
            <h3>Overview</h3>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <h3>0</h3>
                                <p>Total Students</p>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <h3>0</h3>
                                <p>Total Teachers</p>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <h3>0</h3>
                                <p>Outstanding Payment</p>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <h3>0</h3>
                                <p>Total Revenue</p>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

            <div className="char">
                <Bar data={state} />
            </div>
        </div>
    )
}

export default Overview
