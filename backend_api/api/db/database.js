import { Sequelize } from 'sequelize';
import defineUsuario from '../models/usuario.js';
import defineGasto from '../models/gasto.js';
import defineOrcamento from '../models/orcamento.js';
import defineTag from '../models/tag.js';

const sequelize = new Sequelize('postgres://postgres:postgres@postgres:5432/cashaware_dev', {dialect: 'postgres'});

const usuario = defineUsuario(sequelize);
const tag = defineTag(sequelize);
const orcamento = defineOrcamento(sequelize);
const gasto = defineGasto(sequelize);
tag.belongsToMany(gasto, {through: 'gastoTagMap'});
gasto.belongsToMany(tag, {through: 'gastoTagMap'});

sequelize.sync({ alter: true }).then(console.log('DB is synced'));

export default sequelize;