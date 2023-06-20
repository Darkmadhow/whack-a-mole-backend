const Joi = require("joi");
const gameModes = require("../utils/gameModes");

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
  user: Joi.string().hex().length(24).required(),
  score: Joi.number().required(),
  date: Joi.date(),
  gamemode: Joi.string()
    .required()
    .valid(...gameModes),
});

const updateSchema = Joi.object({
  password: Joi.string().alphanum().min(8).max(20),
  email: Joi.string(),
});

module.exports = { sigupSchema, siginSchema, highscoreSchema, updateSchema };
