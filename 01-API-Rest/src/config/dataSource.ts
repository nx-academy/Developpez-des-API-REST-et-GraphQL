import { DataSource } from 'typeorm'

import getConfig from './dbConfig'
import { Bookmark } from '../entity/bookmark.entity'
import { User } from "../entity/user.entity"

const dbConfig = getConfig()

export const dataSource = new DataSource({
    type: dbConfig.type,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    entities: [Bookmark, User],
    synchronize: true
})

