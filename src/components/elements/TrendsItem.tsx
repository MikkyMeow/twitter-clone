import { Box, makeStyles, Typography } from '@material-ui/core';
import { Dropdown } from 'components/ui/Dropdown';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  dropdown: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
}));

const TrendsItem = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography color='textSecondary'>Trending In Russia</Typography>
      <Typography>#коточетверг</Typography>
      <Typography>141K Tweets</Typography>
      <Dropdown className={classes.dropdown} />
    </Box>
  );
};

export default TrendsItem;
