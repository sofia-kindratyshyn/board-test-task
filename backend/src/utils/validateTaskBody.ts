import Joi from 'joi';

export const postValidateTaskBody = Joi.object({
  title: Joi.string().required(),
  order: Joi.number().required(),
  description: Joi.string().required(),
  columnId: Joi.string().required(),
});

export const patchValidateTaskBody = Joi.object({
  title: Joi.string().required(),
  order: Joi.number().required(),
  description: Joi.string().required(),
  columnId: Joi.string().required(),
});
