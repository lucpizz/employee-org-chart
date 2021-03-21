import React from 'react';
import { Typography } from '@material-ui/core';
import GetEmployees from '../components/GetEmployees/GetEmployees';

function Index() {
  return (
    <div>
      <Typography variant='h4' align='center'></Typography>
      <div style={{ width: '100%', height: 800 }}>
        <GetEmployees />
      </div>
    </div>
  );
}

export default Index;
