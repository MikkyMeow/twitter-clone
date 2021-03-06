import { IconButton, makeStyles } from '@material-ui/core';
import {
  HomeOutlined,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
  Subject,
  TurnedInNotOutlined,
  Twitter,
} from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  logo: {
    color: theme.palette.primary.main,
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <nav>
      <ul>
        <li>
          <IconButton>
            <Twitter className={classes.logo} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <HomeOutlined className={classes.logo} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <Search className={classes.logo} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <NotificationsNone className={classes.logo} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <MailOutline className={classes.logo} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <TurnedInNotOutlined className={classes.logo} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <Subject className={classes.logo} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <PermIdentity className={classes.logo} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <MoreHoriz className={classes.logo} />
          </IconButton>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
