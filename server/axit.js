const axios = require("axios");
const { pcoUser, pcoKey } = require("./config");

// Create a pool instance and pass in our config, which we set in our env vars
const axiosConfig = {
  withCredentials: true,
  auth: {
    username: pcoUser,
    password: pcoKey,
  },
};

module.exports = {
  get: (url, params) => {
    return axios.get(url, axiosConfig);
  },
};
