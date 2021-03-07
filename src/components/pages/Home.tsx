import { Grid, makeStyles } from '@material-ui/core';
import Nav from 'components/layouts/Nav';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1240,
    margin: '0 auto',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid component='section' className={classes.root} container>
      <Grid item xs={3}>
        <Nav />
      </Grid>
      <Grid item xs={6}>
        2
      </Grid>
      <Grid item xs={3}>
        3
      </Grid>
    </Grid>
  );
};

export default Home;
