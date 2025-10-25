import Joi from 'joi';

export const postValidateBoardBody = Joi.object({
  title: Joi.string().required(),
});

export const patchValidateBoardBody = Joi.object({
  title: Joi.string().required(),
});
