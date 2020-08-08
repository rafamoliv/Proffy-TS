import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

// GET: Buscar ou listar informação
// POST: Criar alguma informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação

// Corpo da requisição (Request Body): Criação ou atualização de um registro
// Route params: Identificar qual recurso eu quero atualizar ou deletar
// Query params: Paginação, filtros, ordenação

app.use(routes);

//localhost:3333/
app.listen(3333);