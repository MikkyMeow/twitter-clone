import { Grid, makeStyles } from '@material-ui/core';
import { HomePage } from 'components/layouts/HomePage';
import HomeSideBar from 'components/layouts/HomeSideBar';
import Nav from 'components/layouts/Nav';
import { TopBar } from 'components/ui/TopBar';
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
        <TopBar title='Home' />
        <HomePage />
      </Grid>
      <Grid item xs={3}>
        <HomeSideBar />
      </Grid>
    </Grid>
  );
};

export default Home;
