const { Pool } = require('pg');
require('dotenv').config(); 
// Cole sua string de conexão do Neon aqui ou utilize variável de ambiente
const pool = new Pool({
  connectionString: process.env.String_Connection,
});

async function testarConexao() {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT NOW()');
    console.log('Conexão bem-sucedida! Hora atual do banco:', res.rows[0].now);
    client.release();
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } finally {
    await pool.end();
  }
}

testarConexao();
