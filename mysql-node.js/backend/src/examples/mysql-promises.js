const mysql = require('mysql2/promise')

const main = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'fullstack',
            database: 'device_manager',
            port: '3307'
        })

        connection.config.namedPlaceholders = true

        const [carros] = await connection.query('SELECT * FROM devices')

        const insertSql = 'INSERT INTO devices (category_id, device_partnumber, device_color) VALUES (:category_id, :partnumber, :color)'

        const [informacoesItem] = await connection.query(insertSql, { category_id: 1, partnumber: 123461, color: 'TESTE' })

        console.log('Item inserido com o ID', informacoesItem.insertId)
    } catch (error) {
        console.log('Erro no banco de dados:', error.message)
    }

    //connection
    //    .then(conn => {
    //        conn.query('SELECT * FROM devices').then(resultado => {
    //            console.log(resultado[0])
    //        })
    //    }).catch(err => {
    //        console.log('Erro:', err.message)
    //    })

}

main()    