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
    name: Joi.string().required(),
    description: Joi.string().required(),
    url: Joi.string().required()
  })

  const isValid = schema.validate(data)

  if (isValid.error) {
    res
      .status(400)
      .json({
        message: isValid.error.message
      })
  } else {
    const name = data.name as string
    const description = data.description as string
    const url = data.url as string
  
    const bookmark = await dataSource.getRepository(Bookmark).create({
      name,
      description,
      url
    })
  
    const affectedRows = await dataSource.getRepository(Bookmark).save(bookmark)
  
    res.json({
      data: affectedRows,
    });
  }
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
