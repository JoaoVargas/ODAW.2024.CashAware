import createApp from './config/express.js';

const app = createApp();
const port = app.get('port');

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
