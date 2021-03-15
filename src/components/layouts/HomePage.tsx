import { Box } from '@material-ui/core';
import { NewPost } from 'components/elements/NewPost';
import { Post } from 'components/elements/Post';
import React from 'react';

export const HomePage = () => {
  return (
    <Box>
      <NewPost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
