const { getLatestPosts } = require('../lib/index');

const resolverMap = {
  Query: {
    getLatestPosts(obj, args, context) {
      getLatestPosts(args.username);
    }
  }
}

module.exports = resolverMap;
