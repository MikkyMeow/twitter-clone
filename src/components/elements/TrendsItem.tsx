import { Box, makeStyles, Typography } from '@material-ui/core';
import { Dropdown } from 'components/ui/Dropdown';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const TrendsItem = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography color='textSecondary'>Trending In Russia</Typography>
      <Typography>#коточетверг</Typography>
      <Typography>141K Tweets</Typography>
      <Dropdown className='png' />
    </Box>
  );
};

export default TrendsItem;
