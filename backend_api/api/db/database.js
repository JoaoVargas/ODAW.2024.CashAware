import { Sequelize } from 'sequelize';
import defineUsuario from '../models/usuario.js';
import defineGasto from '../models/gasto.js';
import defineOrcamento from '../models/orcamento.js';
import defineTag from '../models/tag.js';
import defineGastoTagMap from '../models/gasto_tag_mapping.js'

const sequelize = new Sequelize('postgres://postgres:postgres@postgres:5432/cashaware_dev', {dialect: 'postgres'});

defineUsuario(sequelize);
defineTag(sequelize);
defineOrcamento(sequelize);
defineGasto(sequelize);
defineGastoTagMap(sequelize);

sequelize.sync({ alter: true }).then(console.log('DB is synced'));

export default sequelize;