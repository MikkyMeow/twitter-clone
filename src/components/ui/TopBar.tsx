import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import { TopTweets } from 'assets';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #EBEEF0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

interface IProps {
  title: string;
}

export const TopBar: React.FC<IProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant='h2'>{title}</Typography>
      <IconButton>
        <TopTweets className={classes.icon} />
      </IconButton>
    </Box>
  );
};
