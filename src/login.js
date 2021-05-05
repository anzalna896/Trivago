import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import pic from './assets/Trivago-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paperContainer:{
   alignItems:"center",
   justifyContent:"center",
   width:'100%',
   textAlign:"center",

    [theme.breakpoints.down("sm")]:{
    textAlign:"center",
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    [theme.breakpoints.down("xs")]:{
    textAlign:"center",
    paddingLeft:"1em",
    paddingRight:"1em"
    }
  },

  login:{
      margin:"1em",
  }
}));

export default function Login(){

    const classes = useStyles();

    return(
  <div className={classes.root}>
      <Grid container className={classes.paperContainer}>
        <Paper elevation={4} style={{width:"800px",height:"800px",marginTop:"3em"}}>
            <Grid item style={{textAlign:"center",marginTop:"1.5em"}}>
                <img src={pic} alt="" width="120px"/>
            </Grid>
            <Grid item container className={classes.login}>
                <Typography>
                  <h3> Log in or create an account</h3> 
                <p>Enter your email address to start</p>
                </Typography>
            </Grid>
            <Grid  item container className={classes.login}>
            <Typography style={{fontWeight:"800"}}>Email address</Typography>
            <TextField
            style={{width:'40%',backgroundColor:"white"}}
                name={'text'}
                variant="outlined"
                placeholder="Email address"
           />
           <Button variant="contained" color="primary" href="#contained-buttons">
                    Next
            </Button></Grid>
            <Divider orientation="vertical" flexItem />
        </Paper>
        </Grid> 
        </div>
    )

}