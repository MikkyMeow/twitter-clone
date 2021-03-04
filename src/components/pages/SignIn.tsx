import { Button, makeStyles, Typography } from '@material-ui/core';
import {
  ModeCommentOutlined,
  PeopleOutline,
  SearchOutlined,
  Twitter,
} from '@material-ui/icons';
import React from 'react';

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
    position: 'relative',
    '& h6': {
      marginBottom: 20,
      display: 'flex',
      alignItems: 'center',
    },
    '& svg': {
      color: '#ffffff',
      fontSize: 32,
      marginRight: 15,
    },
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 45,
  },
}));

const SignIn = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <section className={classes.descrSide}>
        <Twitter color="primary" className={classes.descrSideBackgroundIcon} />
        <div className={classes.loginSideWrapper}>
          <ul>
            <li>
              <Typography variant="h6" color="secondary">
                <SearchOutlined />
                Читайте о том, что вам интересно.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" color="secondary">
                <PeopleOutline />
                Узнайте, о чем говорят в мире.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" color="secondary">
                <ModeCommentOutlined />
                Присоединяйтесь к общению.
              </Typography>
            </li>
          </ul>
        </div>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <Twitter color="primary" className={classes.loginSideTwitterIcon} />
          <Typography variant="h4" className={classes.loginSideTitle}>
            Узнайте, что происходит в мире сейчас
          </Typography>
          <Typography gutterBottom>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <Button
            style={{ marginBottom: 16 }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Зарегистрироваться
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Войти
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
