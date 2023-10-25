import express, { Request, Response } from "express";

import { dataSource } from '../config/dataSource'
import { Bookmark } from '../entity/bookmark.entity'

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const bookmarks = await dataSource.getRepository(Bookmark).find()

  res.json({
    data: bookmarks
  });
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const bookmark = await dataSource.getRepository(Bookmark).findOneBy({ id })


  res.json({
    data: bookmark,
  });
});

router.post("/", async (req: Request, res: Response) => {
  const name = req.body.name as string

  const bookmark = await dataSource.getRepository(Bookmark).create({
    name: name
  })
  const results = await dataSource.getRepository(Bookmark).save(bookmark)

  res.json({
    data: results,
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
