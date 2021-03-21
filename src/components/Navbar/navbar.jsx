import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline } from '@material-ui/core';
//import { styled } from '@material-ui/core/styles';

const Navbar = () => {
  return (
    <>
    <CssBaseline />
      <AppBar position='relative' style={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <Typography variant='h4'>
            Employee Directory
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
