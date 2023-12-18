import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

type DecodedUser = {
  userId: number;
  iat: number;
  exp: number;
};

export interface RequestWithUser extends Request {
  user?: DecodedUser;
}

function verifyToken(req: RequestWithUser, res: Response, next: NextFunction) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  jwt.verify(token, "secret_key", (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    const decodedUser = decoded as DecodedUser;

    req.user = decodedUser;
    return next();
  });
}

export default verifyToken;
