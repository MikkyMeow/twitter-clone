import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {},
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
    <Box display='flex' width='100%' justifyContent='space-between'>
      <Box className={classes.imageBox}>
        <img
          src='https://media.istockphoto.com/illustrations/user-profile-icon-glassy-vibrant-sky-blue-round-button-illustration-illustration-id1164425002?k=6&m=1164425002&s=170667a&w=0&h=3M6yc6H4EHXRWzDOwBRsd653WME4ohXF4CwOxs8hRn4='
          alt='user'
        />
      </Box>
      <Box className={classes.userInfo}>
        <Typography>Pavel Durov</Typography>
        <Typography>@durov</Typography>
      </Box>
      <Button variant='outlined' color='primary'>
        Follow
      </Button>
    </Box>
  );
};

export default FollowItem;
