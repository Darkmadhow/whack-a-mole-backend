const Joi = require("joi");

const sigupSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().alphanum().min(8).max(20).required(),
});

const siginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().alphanum().min(8).max(20).required(),
});

const highscoreSchema = Joi.object({
  user_id: Joi.string().hex().length(24).required(),
  score: Joi.number().required(),
  date: Joi.date(),
});

module.exports = { sigupSchema, siginSchema, highscoreSchema };
