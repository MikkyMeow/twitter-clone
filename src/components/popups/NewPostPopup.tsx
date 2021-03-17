import { Box, Dialog, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { NewPost } from 'components/elements/NewPost';
import React from 'react';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const NewPostPopup: React.FC<IProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box width={600}>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
        <NewPost />
      </Box>
    </Dialog>
  );
};
