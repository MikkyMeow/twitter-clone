import { Box, Button, makeStyles, Popover } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: 35,
    width: 35,
    height: 35,
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
      backgroundColor: `${theme.palette.primary.light}33`,
    },
  },
}));

interface IProps {
  className: string;
}

export const Dropdown: React.FC<IProps> = ({ className }) => {
  const classes = useStyles();
  const [anchorButton, setAnchorButton] = useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorButton);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorButton(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorButton(null);
  };

  return (
    <Box className={className}>
      <Button className={classes.button} onClick={handleClick}>
        <MoreHoriz />
      </Button>
      <Popover
        open={open}
        anchorEl={anchorButton}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        The content of this popover
      </Popover>
    </Box>
  );
};
