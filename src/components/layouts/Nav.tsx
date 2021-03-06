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
import React from 'react';

const useStyles = makeStyles((theme) => ({
  logo: {
    color: theme.palette.primary.main,
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <List component='nav'>
      <ListItem button>
        <ListItemIcon>
          <Twitter />
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <HomeOutlined />
        </ListItemIcon>
        <ListItemText primary='Home' />
      </ListItem>
    </List>
  );
};

export default Nav;
