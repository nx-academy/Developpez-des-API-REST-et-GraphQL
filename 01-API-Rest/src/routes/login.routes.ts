import express, { Request, Response } from "express";
import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { dataSource } from "../config/dataSource";
import { User } from "../entity/user.entity";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  const data = req.body;

  const schema = Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().required(),
  });

  const isValid = schema.validate(data);

  if (isValid.error) {
    res.status(401).json({
      message: isValid.error.message,
    });
  } else {
    const name = data.name as string;
    const password = data.password as string;

    const user = await dataSource.getRepository(User).findOneBy({ name });

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    const arePasswordsMatching = await bcrypt.compare(password, user.password);

    if (!arePasswordsMatching) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign({ userId: user.id }, "secret_key", {
      expiresIn: "1h",
    });

    return res.json({ token });
  }
});

export default router;
