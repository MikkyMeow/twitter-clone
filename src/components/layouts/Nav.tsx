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

const useStyles = makeStyles((theme) => ({
  logo: {
    color: theme.palette.primary.main,
  },
}));

interface INavItems {
  label: string;
  icon: JSX.Element;
}

const Nav = () => {
  const classes = useStyles();

  const navItems: INavItems[] = useMemo(
    () => [
      { label: 'Home', icon: <HomeOutlined /> },
      { label: 'Explore', icon: <Search /> },
      { label: 'Notification', icon: <NotificationsNone /> },
      { label: 'Messages', icon: <MailOutline /> },
      { label: 'Bookmarks', icon: <TurnedInNotOutlined /> },
      { label: 'Lists', icon: <Subject /> },
      { label: 'Profiles', icon: <PermIdentity /> },
      { label: 'More', icon: <MoreHoriz /> },
    ],
    []
  );

  return (
    <List
      component='nav'
      subheader={
        <IconButton>
          <Twitter />
        </IconButton>
      }
    >
      {navItems.map((item, index) => (
        <ListItem key={index} button>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
};

export default Nav;
