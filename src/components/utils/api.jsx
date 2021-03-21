import axios from 'axios';

export default {
  getEmployees: function () {
    return axios.get(
      'https://randomuser.me/api/?inc=picture,id,name,login,email,location&results=15&nat=us'
    );
  },
};
