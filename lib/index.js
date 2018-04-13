const { axios } = require('../services/axios');

function getLatestPosts (username) {
  const uri = `/${username}/latest?format=json`;
  axios.get(uri)
    .then(res => {
      let result = res.data;
      result = JSON.parse(result.substring(16));
      console.log(result);
      return result.posts;
    })
    .catch(err => console.log(err));
}

module.exports = { getLatestPosts }