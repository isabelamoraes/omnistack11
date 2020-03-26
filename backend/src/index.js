const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * Cors determina quem pode acessar a aplicação
 * Se estiver em produção, ai coloca a origem permitida
 * Ex: app.use(cors({ origin: 'http://meuapp.com' }));
 */
app.use(cors());
//informar que estará utilizando json nas requisições
app.use(express.json());
app.use(routes);

/**
 * Rota
 * Recurso
 * 
 * Metódos  HTTP:
 * GET (buscar), POST (adicionar), PUT (atualizar), DELETE (deletar)
 * 
 * Tipos de Parâmetros:
 * Query Params: enviados na rota após o "?"
 * Route Params: identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * Bancos de Dados
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Comunicação com o Banco
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() -> ferramenta KNEX
 * 
 */

app.listen(3333);