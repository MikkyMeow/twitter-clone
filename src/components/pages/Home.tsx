import { Grid } from '@material-ui/core';
import Nav from 'components/layouts/Nav';
import React from 'react';

const Home = () => {
  return (
    <section>
      <Grid container>
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
    </section>
  );
};

export default Home;
