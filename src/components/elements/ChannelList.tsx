import { Box, List, ListItem, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import FollowItem from './FollowItem';
import TrendsItem from './TrendsItem';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F6F9FA',
    borderRadius: 20,
    marginBottom: theme.spacing(2),
  },
  title: {
    padding: '12px 16px',
    borderBottom: '1px solid #EBEEF0',
  },
  listItem: {
    borderBottom: '1px solid #EBEEF0',
    '&:last-child': {
      borderBottom: 0,
      color: theme.palette.primary.main,
    },
  },
}));

interface IProps {
  title: string;
}

const ChannelList: React.FC<IProps> = ({ title = '' }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant='h2'>
        {title}
      </Typography>
      <List disablePadding>
        <ListItem button className={classes.listItem}>
          <TrendsItem />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <FollowItem />
        </ListItem>
        <ListItem button className={classes.listItem}>
          Show more
        </ListItem>
      </List>
    </Box>
  );
};

export default ChannelList;
