import React, { Component } from 'react';
import api from '../../components/utils/api';
import { DataGrid } from '@material-ui/data-grid';

export default class GetEmployees extends Component {
  state = {
    employee: [],
  };

  columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'First Name', width: 170 },
    { field: 'lastName', headerName: 'Last Name', width: 180 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'Email', width: 260 },
    { field: 'location', headerName: 'Location: State', width: 150 },
  ];

  componentDidMount() {
    api
      .getEmployees()
      .then((res) => {
        this.setState({
          employee: res.data.results.map((e) => ({
            id: e.login.uuid,
            firstName: e.name.first,
            lastName: e.name.last,
            username: e.login.username,
            email: e.email,
            location: e.location.state,
          })),
        });
        // eslint-disable-next-line
        console.log(this.state.employee);
      })
      .catch((err) => {
        err.message;
      });
  }

  render() {
    return (
      <>
        <DataGrid rows={this.state.employee} columns={this.columns} />
      </>
    );
  }
}
