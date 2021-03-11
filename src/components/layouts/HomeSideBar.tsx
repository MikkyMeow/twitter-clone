import {
  Box,
  InputAdornment,
  makeStyles,
  OutlinedInput,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import ChannelList from 'components/elements/ChannelList';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {},
  searchInput: {
    background: '#C4CFD5',
    borderRadius: 30,
    color: '#3A4D5B',
    height: 44,
    marginBottom: theme.spacing(2),
  },
}));

const HomeSideBar = () => {
  const classes = useStyles();

  return (
    <Box component='section' padding={1.5} className={classes.root}>
      <OutlinedInput
        classes={{ root: classes.searchInput }}
        placeholder='Search Twitter'
        fullWidth
        color='secondary'
        inputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <ChannelList title='Trends for you' />
      <ChannelList title='Who to follow' />
    </Box>
  );
};

export default HomeSideBar;
