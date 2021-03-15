import { makeStyles } from '@material-ui/core';
import { NewPost } from 'components/elements/NewPost';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export const HomePage = () => {
  const classes = useStyles();

  return <NewPost />;
};
