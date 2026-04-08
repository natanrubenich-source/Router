import 'dotenv/config';
import express from 'express';
import {routerContatos} from './router/contatosRouter.js'

const app = express();
app.use(express.json());

app.use('/contatos', routerContatos);

const PORT= process.env.SERVER_PORT

app.listen(3000, () => {
    console.log(`Aplicação rodando em: http://localhost:${PORT}`);
});