import React from 'react'

import "./layout.css"
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from "../Sidebar"




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function LayOut({children}) {

    const classes = useStyles();


    return (
            <div className="layout-overview">
                <Sidebar />

                <div className="layout-content">
                    {/* {children} */}
                    <p>component</p>
                    
                </div>
        </div>
    )
}

export default LayOut
