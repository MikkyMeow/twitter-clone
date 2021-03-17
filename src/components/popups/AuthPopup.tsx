import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '14px 30px 30px',
  },
  title: {
    padding: 0,
    color: theme.palette.secondary.dark,
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
}));

interface IProps {
  open: boolean;
  onClose: () => void;
  isRegister?: boolean;
}

export const AuthPopup: React.FC<IProps> = ({
  open,
  onClose,
  isRegister = true,
}) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose}>
      <div className={classes.root}>
        <DialogTitle className={classes.title}>
          {isRegister ? 'Create yout account' : 'Log In'}
        </DialogTitle>
        <DialogContent>
          <TextField
            className={classes.input}
            autoFocus
            id='email'
            label='E-mail'
            type='email'
            fullWidth
          />
          <TextField
            className={classes.input}
            id='password'
            label='Password'
            type='password'
            fullWidth
          />
          {isRegister && (
            <TextField
              className={classes.input}
              id='repeat-password'
              label='Repeat password'
              type='password'
              fullWidth
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='primary' onClick={onClose}>
            Отмена
          </Button>
          <Button variant='contained' color='primary'>
            Войти
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};
