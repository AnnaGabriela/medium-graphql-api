const { axios } = require("../services/axios");

function getLatestPosts(username) {
  const uri = `/@${username}/latest?format=json`;
  let latestPosts = [];
  return axios
    .get(uri)
    .then(result => {
      let data = result.data;
      data = JSON.parse(data.substring(16));
      if (data.success) {
        const posts = Object.values(data.payload.references.Post);
        latestPosts = latestPosts.concat(
          posts.map(post => {
            return {
              title: post.title,
              createdAt: post.createdAt,
              subtitle: post.virtuals.subtitle,
              link: `https://medium.com/@${username}/${post.uniqueSlug}`
            };
          })
        );
      } else throw new Error();
      return latestPosts;
    })
    .catch(err => err);
}

module.exports = { getLatestPosts };
