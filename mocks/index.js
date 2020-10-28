const axios = require("axios");

const Users = {
  all() {
    return axios.get("/users.json").then((resp) => resp.data);
  },
};

module.exports = Users;
