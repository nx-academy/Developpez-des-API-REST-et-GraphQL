import { DataSource } from 'typeorm'
import { Bookmark } from './entity/bookmark.entity'

export const myDataSource = new DataSource({
    type: 'mariadb',
    host: 'database',
    port: 3306,
    username: 'admin',
    password: 'toto90',
    database: 'bookmark_db',
    entities: [Bookmark],
    logging: true,
    synchronize: true
})

