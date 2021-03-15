import {
  Avatar,
  Box,
  Button,
  IconButton,
  Input,
  List,
  ListItem,
  makeStyles,
} from '@material-ui/core';
import {
  CalendarToday,
  Equalizer,
  Gif,
  Image,
  SentimentSatisfied,
} from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
    border: '1px solid #EBEEF0',
    borderTop: 'none',
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: theme.spacing(1.5),
  },
  content: {
    width: '100%',
  },
  input: {
    fontSize: theme.typography.h3.fontSize,
    color: theme.palette.text.disabled,
    padding: `${theme.spacing(1.5)}px 0`,
  },
  iconButtonsContainer: {
    position: 'relative',
    left: -14,
  },
  iconButtons: {
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.light}33`,
    },
  },
}));

export const NewPost = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box display='flex'>
        <Avatar className={classes.avatar} alt='User' />
        <Box className={classes.content}>
          <Input
            className={classes.input}
            fullWidth
            multiline
            disableUnderline
            placeholder="What's happening?"
          />
          <Box display='flex' justifyContent='space-between'>
            <Box className={classes.iconButtonsContainer}>
              <IconButton className={classes.iconButtons}>
                <Image />
              </IconButton>
              <IconButton className={classes.iconButtons}>
                <Gif />
              </IconButton>
              <IconButton className={classes.iconButtons}>
                <Equalizer />
              </IconButton>
              <IconButton className={classes.iconButtons}>
                <SentimentSatisfied />
              </IconButton>
              <IconButton className={classes.iconButtons}>
                <CalendarToday />
              </IconButton>
            </Box>
            <Button variant='contained' color='primary' disabled>
              Tweet
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
