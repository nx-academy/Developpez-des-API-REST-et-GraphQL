import express, { Request, Response } from "express";
import Joi from "joi";
import bcrypt from "bcrypt";

import { validateUser } from "../utils/validateSchema"
import verifyTokenUtils from "../utils/verifyToken";

import { dataSource } from "../config/dataSource";
import { User } from "../entity/user.entity";

const router = express.Router();

router.get("/", verifyTokenUtils, async (req: Request, res: Response) => {
  const users = await dataSource.getRepository(User).find();

  res.json({
    data: users,
  });
});

router.get("/:id", validateUser, async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await dataSource.getRepository(User).findOneBy({
    id: Number(id),
  });

  res.json({
    data: user,
  });
});

router.post("/", async (req: Request, res: Response) => {
  const data = req.body;

  const schema = Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().required(),
  });

  const isValid = schema.validate(data);

  if (isValid.error) {
    res.status(400).json({
      message: isValid.error.message,
    });
  } else {
    const name = data.name as string;
    const password = data.password as string;

    const hashedPassword = await bcrypt.hash(password, 10);
    const userRepository = dataSource.getRepository(User);

    const user = userRepository.create({
      name,
      password: hashedPassword,
    });

    const affectedRows = await userRepository.save(user);

    res.json({
      data: affectedRows,
    });
  }
});

export default router;
