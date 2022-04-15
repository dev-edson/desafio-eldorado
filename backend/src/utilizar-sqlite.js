const sqlite = require('sqlite3')

function tratarErro(err) {
    if (err !== null) {
        console.error('Ocorreu um erro no banco de dados -', err.message)
    }
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

//bancoDeDados.all(
bancoDeDados.all(
    "SELECT * FROM devices",
    function (err, rows) {
        console.log(rows)
    }
)

// Atualização de valores na tabela
//bancoDeDados.run(
//    "UPDATE devices SET device_color = 'Branca' WHERE device_id = 2",
//    tratarErro
//)

// Remoção de valores na tabela
//bancoDeDados.run(
//    "DELETE FROM devices WHERE device_id = 2",
//    tratarErro
//)
