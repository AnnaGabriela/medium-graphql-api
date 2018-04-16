const { getLatestPosts } = require('../lib/index');

const resolverMap = {
  Query: {
    getLatestPosts(obj, args, context) {
      return getLatestPosts(args.username)
        .then(res => res)
        .catch(err => err);
    }
  }
}

module.exports = resolverMap;
