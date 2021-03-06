import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(1),
      },
    },
  },
  adminContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "800px",
    [theme.breakpoints.down("sm")]: {
      height: "600px",
    },
  },
  adminInput: {
    padding: "10px",
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "5px",
    },
  },
  adminButton: {
    padding: "10px",
    width: "500px",
    marginLeft: "6%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "5px",
    },
  },
  adminImage: {
    width: "100px",
    height: "100px",
  },
}));

function AdminLogin() {
  const classes = useStyles();

  return (
    <div className={classes.adminContainer}>
      <img
        src="https://res.cloudinary.com/doouwbecx/image/upload/v1621703685/admin-sign-laptop-icon-stock-vector-166205404_jxpnxr.jpg"
        className={classes.adminImage}
      />
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-basic"
            label="Enter Email "
            variant="outlined"
            className={classes.adminInput}
          />
        </div>

        <div>
          <TextField
            id="outlined-basic"
            label="Enter Password"
            variant="outlined"
            className={classes.adminInput}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          className={classes.adminButton}
        >
          Primary
        </Button>
      </form>
    </div>
  );
}

export default AdminLogin;
