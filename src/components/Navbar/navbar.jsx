import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navbar = () => {
  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <Typography align='center' variant='h3'>
            Employee Organization Table
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
