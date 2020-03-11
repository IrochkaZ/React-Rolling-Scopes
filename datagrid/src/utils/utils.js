module.exports = {
  strCut: (str) => (str.length>=6) ? `${str.substr(0,5)}...`: str,
};