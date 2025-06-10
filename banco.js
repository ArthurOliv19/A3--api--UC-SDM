const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'a3_api' 
});


db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar com o banco de dados:', err.message);
    return;
  }
  console.log(' Conectado ao banco com sucesso !');
});

module.exports = db;
