// eslint-disable-next-line no-unused-vars
function ping(req, res, next) {
  res.status(200).json({ status: 'OK' });
}

module.exports = {
  ping,
};
