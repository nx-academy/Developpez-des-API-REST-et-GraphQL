type DbConfig = {
    type: 'mariadb',
    host?: string,
    port?: number,
    username?: string,
    password?: string,
    database?: string
}

function getConfig(): DbConfig | never {
    const config: DbConfig = {
        type: 'mariadb',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }

    Object.values(config).forEach(value => {
        if (!value) {
            throw new Error('Something went wrong with database conf')
        }
    })

    return config
}

export default getConfig
