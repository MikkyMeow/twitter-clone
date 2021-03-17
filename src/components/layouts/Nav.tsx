import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
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
import React, { useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { NewPostPopup } from 'components/popups/NewPostPopup';

const useStyles = makeStyles((theme) => ({
  logo: {
    color: theme.palette.primary.main,
    '& svg': {
      width: 46,
      height: 46,
    },
  },
  navItem: {
    textDecoration: 'none',
    color: theme.palette.secondary.dark,
    '& svg': {
      width: 27,
      height: 27,
      color: theme.palette.secondary.dark,
    },
    '&.active svg': {
      color: theme.palette.secondary.main,
    },
    '&.active .MuiListItem-button:hover': {
      backgroundColor: 'rgba(0,0,0,0)',
      cursor: 'default',
    },
  },
  navItemText: {
    fontSize: 24,
    fontWeight: 700,
  },
  listItem: {
    borderRadius: 30,
  },
  disabled: {
    color: theme.palette.secondary.dark,
    pointerEvents: 'none',
  },
  createTweet: {
    width: 225,
  },
}));

interface INavItems {
  label: string;
  icon: JSX.Element;
  to: string;
  isDisabled: boolean;
}

const Nav = () => {
  const classes = useStyles();
  const [showPopup, setShowPopup] = useState(false);
  const navItems: INavItems[] = useMemo(
    () => [
      { label: 'Home', icon: <HomeOutlined />, to: '/home', isDisabled: false },
      { label: 'Explore', icon: <Search />, to: '/explore', isDisabled: true },
      {
        label: 'Notifications',
        icon: <NotificationsNone />,
        to: '/notifications',
        isDisabled: true,
      },
      {
        label: 'Messages',
        icon: <MailOutline />,
        to: '/messages',
        isDisabled: true,
      },
      {
        label: 'Bookmarks',
        icon: <TurnedInNotOutlined />,
        to: '/bookmarks',
        isDisabled: true,
      },
      { label: 'Lists', icon: <Subject />, to: '/lists', isDisabled: true },
      {
        label: 'Profile',
        icon: <PermIdentity />,
        to: '/profile',
        isDisabled: true,
      },
      { label: 'More', icon: <MoreHoriz />, to: '/more', isDisabled: true },
    ],
    []
  );

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <List
        component='nav'
        subheader={
          <Link to='/home'>
            <IconButton className={classes.logo}>
              <Twitter />
            </IconButton>
          </Link>
        }
      >
        {navItems.map((item, index) => (
          <NavLink
            to={item.to}
            className={classnames(
              classes.navItem,
              item.isDisabled && classes.disabled
            )}
            activeStyle={{ color: '#274A9D' }}
          >
            <ListItem
              key={index}
              button
              disabled={item.isDisabled}
              classes={{ root: classes.listItem, disabled: classes.disabled }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.navItemText }}
                primary={item.label}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Button
        className={classes.createTweet}
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        Tweet
      </Button>
      <NewPostPopup open={showPopup} onClose={handleClose} />
    </>
  );
};

export default Nav;
