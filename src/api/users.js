import axios from 'axios';

// Default
axios.defaults.baseURL = process.env.USERS;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post.Accept = 'application/json';

export default {
  getUsers() {
    return axios({
      method: 'GET',
      url: `https://reqres.in/api/users`,
      data: null,
    });
  },
};