import {
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
import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

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
        to: '#',
        isDisabled: true,
      },
      {
        label: 'Bookmarks',
        icon: <TurnedInNotOutlined />,
        to: '#',
        isDisabled: true,
      },
      { label: 'Lists', icon: <Subject />, to: '#', isDisabled: true },
      {
        label: 'Profile',
        icon: <PermIdentity />,
        to: '#',
        isDisabled: true,
      },
      { label: 'More', icon: <MoreHoriz />, to: '#', isDisabled: true },
    ],
    []
  );

  return (
    <List
      component='nav'
      subheader={
        <IconButton className={classes.logo}>
          <Twitter />
        </IconButton>
      }
    >
      {navItems.map((item, index) => (
        <NavLink
          to={item.to}
          className={classes.navItem}
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
  );
};

export default Nav;
