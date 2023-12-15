import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  jwt.verify(token, "secret_key", (err, decoded) => {
    if (err) {
      return res.status(401).json({
        messaage: "Invalid token",
      });
    }

    //req.user = decoded;
    return next();
  });
}

export default verifyToken;
