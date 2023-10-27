import express, { Request, Response } from "express";
import Joi from "joi";

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
  const data = req.body

  const schema = Joi.object().keys({
    name: Joi.string().required()
  })

  const isValid = schema.validate(data)

  console.log("=====")
  console.log(data)
  console.log("=====")
  console.log(isValid)
  console.log("=====")

  if (isValid.error) {
    res.send(isValid.error.message)
  } else {
    res.send("foo")
  }
  
  // const name = req.body.name as string

  // const bookmark = await dataSource.getRepository(Bookmark).create({
  //   name: name
  // })
  // const results = await dataSource.getRepository(Bookmark).save(bookmark)

  // res.json({
  //   data: results,
  // });
});

router.put("/:id", async (req: Request, res: Response) => {
  const bookmarkId = Number(req.params.id)
  const newBookmarkName = req.body.name as string

  const bookmark = await dataSource.getRepository(Bookmark).findOneBy({
    id: bookmarkId
  })

  let data = null

  if (bookmark) {
    dataSource.getRepository(Bookmark).merge(bookmark, { name: newBookmarkName })
    data = await dataSource.getRepository(Bookmark).save(bookmark)
  }

  res.json({
    data: data
  })
});

router.delete("/", (req: Request, res: Response) => {
  console.log("Delete one bookmark");

  res.json({
    data: "Delete one bookmark",
  });
});

export default router
