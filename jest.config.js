module.exports = {
  // other configurations...
  transformIgnorePatterns: ["/node_modules/(?!axios/)"],
  // specify babel-jest as a transformer for JavaScript files
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
