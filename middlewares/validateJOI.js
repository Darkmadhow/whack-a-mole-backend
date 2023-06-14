const validateJOI = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  return error ? next(new Error(error)) : next();
};

module.exports = validateJOI;
