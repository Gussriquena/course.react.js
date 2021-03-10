import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root:{
    background: theme.palette.primary.main,
    padding: theme.spacing(5),
    height: '100vh'
  }
}));

function Home(){
const classes = useStyles();

  return(
    <div className={classes.root}>
    Texto aleatório
    </div>
  )
}

export default Home;
