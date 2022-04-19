const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fullstack',
    database: 'device_manager',
    port: '3307'
})

// Criar uma tabela
const criacaoTabelaCategories = `
CREATE TABLE IF NOT EXISTS categories ( 
    category_id INT AUTO_INCREMENT PRIMARY KEY, 
    category_name VARCHAR(128) NOT NULL )
    `
connection.query(criacaoTabelaCategories, (err, result, fields) => {
    console.log('err', err)
    console.log('result', result)
    console.log('fields', fields)
})

// Criar uma tabela
const criacaoTabelaDevices = `
CREATE TABLE IF NOT EXISTS devices ( 
    device_id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    device_partnumber INT,
    device_color VARCHAR(16) NOT NULL,
    CONSTRAINT fk_categories FOREIGN KEY (category_id) REFERENCES categories(category_id) 
  )
`
connection.query(criacaoTabelaDevices, (err, result, fields) => {
    console.log('err', err)
    console.log('result', result)
    console.log('fields', fields)
})

//Inserir dados na tabela
const SelecaoDadosSql = `
SELECT * FROM devices
`
connection.query(SelecaoDadosSql, (err, result, fields) => {
    console.log('err', err)
    console.log('result', result)
    console.log('fields', fields)
})

//Selecionar dados na tabela
//const criacaoDadosSql = `
//INSERT INTO devices (category_id, device_partnumber, device_color)
//VALUES (1, 123457, 'Preta')
//`
//connection.query(criacaoDadosSql, (err, result, fields) => {
//    console.log('err', err)
//    console.log('result', result)
//    console.log('fields', fields)
//})

connection.end()
