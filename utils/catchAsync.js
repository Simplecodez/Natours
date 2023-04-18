module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next); //Or err => next(err)
  };
};
