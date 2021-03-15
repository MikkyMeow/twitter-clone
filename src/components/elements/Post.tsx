import {
  Avatar,
  Box,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Repeat,
  Reply,
} from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
    display: 'flex',
    border: '1px solid #EBEEF0',
    borderTop: 'none',
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: theme.spacing(1.5),
  },
  iconButtonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 425,
  },
}));

export const Post = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar className={classes.avatar} alt='User' />
      <Box width='100%'>
        <Box display='flex'>
          <Typography variant='h4'>jsunderhood</Typography>
          &nbsp;
          <Typography variant='h5'>@jsunderhood</Typography>
          &nbsp;
          <Typography variant='h5'>· 3h</Typography>
        </Box>
        <Typography variant='h5' color='textPrimary'>
          Talk is cheap. Show me the code
        </Typography>
        <Box className={classes.iconButtonsContainer}>
          <IconButton>
            <ChatBubbleOutline />
          </IconButton>
          <IconButton>
            <Repeat />
          </IconButton>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
          <IconButton>
            <Reply />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
