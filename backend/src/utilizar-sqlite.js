const sqlite = require('sqlite3')

function tratarErro(err) {
    if (err !== null) {
        console.error('Ocorreu um erro no banco de dados -', err.message)
    }
}

// Verificação e criação de pasta (Se a pasta não existir vai cria-la)
const fs = require('fs');
const PASTA_DATABASE = 'backend/src/database';

if (!fs.existsSync(PASTA_DATABASE)) {
    fs.mkdirSync(PASTA_DATABASE)
}

//Cria o banco de dados "database.db" na pasta src/database
let bancoDeDados = new sqlite.Database('backend/src/database/device_manager.db', tratarErro)

//Criação das tabelas
bancoDeDados.run(`
  CREATE TABLE IF NOT EXISTS devices (
    device_id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER NOT NULL,
    device_color TEXT NOT NULL,
    device_partnumber INTEGER NOT NULL
  )
`, tratarErro)

//Inserção de valores na tabela
//bancoDeDados.run(
//    "INSERT INTO devices (category_id, device_color, device_partnumber) VALUES (1, 'Preta', 123456)",
//    tratarErro
//)

//bancoDeDados.run(
//    `INSERT INTO devices 
//    (category_id, device_color, device_partnumber) 
//    VALUES 
//    (?, ?, ?)
//    `, 2, 'Vermelha', 452020,
//    tratarErro
//)

bancoDeDados.run(
    `INSERT INTO devices 
    (category_id, device_color, device_partnumber) 
    VALUES 
    ($category_id, $device_color, $device_partnumber)`,
    {
        $category_id: '3',
        $device_color: 'Azul',
        $device_partnumber: 452021
    },
    tratarErro
)

// Preparação de script para utilizar mais de uma vez
let stmt = bancoDeDados.prepare(
    "INSERT INTO devices (category_id, device_color, device_partnumber) VALUES (?, ?, ?)",
    tratarErro
)

for (let index = 0; index < 10; index++) {
    stmt.run(4, 'Azul', 222020)
}

stmt.finalize()


//bancoDeDados.all(
bancoDeDados.all(
    "SELECT * FROM devices",
    function (err, rows) {
        console.log(rows)
    }
)

bancoDeDados.each(
    "SELECT * FROM devices",
    function (err, row) {
        console.log('ITEM: ', row)
    }
)

//Primeiro item
bancoDeDados.get(
    "SELECT * FROM devices",
    function (err, row) {
        console.log('SOMENTE UM: ', row)
    }
)

// Atualização de valores na tabela
bancoDeDados.run(
    "UPDATE devices SET device_color = 'Branca' WHERE device_id = 2",
    tratarErro
)

// Remoção de valores na tabela
bancoDeDados.run(
    "DELETE FROM devices WHERE device_id = 2",
    tratarErro
)

bancoDeDados.close()