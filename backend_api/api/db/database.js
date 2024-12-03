import { Sequelize } from 'sequelize';
import defineUsuario from '../models/usuario.js';
import defineOrcamento from '../models/orcamento.js';

const sequelize = new Sequelize('postgres://postgres:postgres@postgres:5432/cashaware_dev', {dialect: 'postgres'});

defineOrcamento(sequelize);

sequelize.sync({ alter: true }).then(console.log('DB is synced'));

export default sequelize;