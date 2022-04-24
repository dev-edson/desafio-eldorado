const mysql = require('mysql2/promise')

const conexao = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'fullstack',
        database: 'device_manager',
        port: '3307'
    })

    connection.config.namedPlaceholders = true

    return connection
}

module.exports = conexao
