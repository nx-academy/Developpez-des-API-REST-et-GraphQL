import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  console.log("Get all bookmarks");

  res.json({
    data: "Get all bookmarks",
  });
});

router.get("/:id", (req: Request, res: Response) => {
  console.log("Get one bookmark");

  res.json({
    data: "Get one bookmark",
  });
});

router.post("/", (req: Request, res: Response) => {
  console.log("Create one bookmark");

  res.json({
    data: "Create one bookmark",
  });
});

router.put("/", (req: Request, res: Response) => {
  console.log("Update one bookmark");

  res.json({
    data: "Update one bookmark",
  });
});

router.delete("/", (req: Request, res: Response) => {
  console.log("Delete one bookmark");

  res.json({
    data: "Delete one bookmark",
  });
});

export default router
