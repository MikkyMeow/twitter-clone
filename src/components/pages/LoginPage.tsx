import {
  Box,
  Button,
  List,
  ListItem,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  ModeCommentOutlined,
  PeopleOutline,
  SearchOutlined,
  Twitter,
} from '@material-ui/icons';
import { AuthPopup } from 'components/popups/AuthPopup';
import React, { useEffect, useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
  },
  descrSide: {
    position: 'relative',
    backgroundColor: '#59B2EB',
    overflow: 'hidden',
    height: '100vh',
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descrSideWrapper: {
    width: 380,
    position: 'relative',
    '& h6': {
      color: theme.palette.secondary.light,
      marginBottom: 16,
    },
    '& svg': {
      color: theme.palette.secondary.light,
      fontSize: 32,
      marginRight: 15,
    },
  },
  descrSideBackgroundIcon: {
    color: '#1EA2F1',
    position: 'absolute',
    left: '50%',
    top: '45%',
    width: '150%',
    height: '150%',
    transform: 'translate(-50%, -50%)',
  },
  loginSide: {
    zIndex: 2,
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
    marginBottom: 20,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginDescr: {
    fontWeight: 700,
    marginBottom: 16,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 45,
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [showPopup, setShowPopup] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const path = useLocation().pathname;

  useEffect(() => {
    if (path === '/register') {
      setIsRegister(true);
      setShowPopup(true);
      return;
    }
    if (path === '/login') {
      setIsRegister(false);
      setShowPopup(true);
      return;
    }
  }, [path]);

  const handleClick = (isRegister: boolean) => {
    setIsRegister(isRegister);
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
    return <Redirect to='/' />;
  };

  return (
    <Box className={classes.wrapper}>
      <Box component='section' className={classes.descrSide}>
        <Twitter color='primary' className={classes.descrSideBackgroundIcon} />
        <Box className={classes.descrSideWrapper}>
          <List>
            <ListItem>
              <Typography variant='h6' color='secondary'>
                <SearchOutlined />
                Follow your interests.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='h6' color='secondary'>
                <PeopleOutline />
                Hear what people are talking about.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='h6' color='secondary'>
                <ModeCommentOutlined />
                Join the conservation.
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box component='section' className={classes.loginSide}>
        <Box className={classes.loginSideWrapper}>
          <Twitter color='primary' className={classes.loginSideTwitterIcon} />
          <Typography variant='h4' className={classes.loginSideTitle}>
            See what's happening in the world right now
          </Typography>
          <Typography className={classes.loginDescr}>
            Join Twitter today.
          </Typography>
          <Button
            style={{ marginBottom: 16 }}
            variant='contained'
            color='primary'
            fullWidth
            onClick={() => handleClick(true)}
          >
            Sign Up
          </Button>
          <Button
            variant='outlined'
            color='primary'
            fullWidth
            onClick={() => handleClick(false)}
          >
            Log In
          </Button>
        </Box>
      </Box>
      <AuthPopup
        open={showPopup}
        onClose={handleClose}
        isRegister={isRegister}
      />
    </Box>
  );
};

export default LoginPage;
