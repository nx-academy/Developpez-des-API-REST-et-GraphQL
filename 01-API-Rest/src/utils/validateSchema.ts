import { Request, Response, NextFunction } from "express";
import Joi from "joi";

function validateUser(req: Request, res: Response, next: NextFunction) {
  const data = req.body;

  const schema = Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(data);

  if (error) {
    return res.status(400).json({
      message: error.message,
    });
  } else {
    return next();
  }
}

function validateBookmark(req: Request, res: Response, next: NextFunction) {
  const data = req.body;

  const schema = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    url: Joi.string().required(),
  });

  const { error } = schema.validate(data);

  if (error) {
    return res.status(400).json({
      message: error.message,
    });
  } else {
    return next();
  }
}

export { validateUser, validateBookmark };
