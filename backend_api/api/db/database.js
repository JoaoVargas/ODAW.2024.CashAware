import { Sequelize } from 'sequelize';
import defineUsuario from '../models/usuario.js';
import defineTag from '../models/tag.js';

const sequelize = new Sequelize('postgres://postgres:postgres@postgres:5432/cashaware_dev', {dialect: 'postgres'});

defineUsuario(sequelize);
defineTag(sequelize);

sequelize.sync({ alter: true }).then(console.log('DB is synced'));

export default sequelize;