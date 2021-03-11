import { Box, Button, Typography } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import React from 'react';

const FollowItem = () => {
  return (
    <Box display='flex'>
      <Box>
        <Image />
      </Box>
      <Box>
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
