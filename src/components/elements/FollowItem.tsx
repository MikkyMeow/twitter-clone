import { Avatar, Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageBox: {
    width: 48,
    height: 48,
    marginRight: 8,
  },
  userInfo: {
    marginRight: 'auto',
  },
}));

const FollowItem = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.imageBox}>
        <Avatar alt='User' />
      </Box>
      <Box className={classes.userInfo}>
        <Typography gutterBottom>Pavel Durov</Typography>
        <Typography gutterBottom>@durov</Typography>
      </Box>
      <Button variant='outlined' color='primary'>
        Follow
      </Button>
    </Box>
  );
};

export default FollowItem;
