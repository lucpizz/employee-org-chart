import React from 'react';
import { Typography } from '@material-ui/core';
import GetEmployees from '../components/GetEmployees/GetEmployees';
import Copyright from '../components/Footer/copyright'

function Index() {
  return (
    <div>
      <Typography variant='h4' align='center'></Typography>
      <div style={{ width: '100%', height: 800 }}>
        <GetEmployees />
      </div>
      <Copyright />
    </div>
  );
}

export default Index;
