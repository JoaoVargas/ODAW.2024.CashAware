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

// tag <-> gasto = (n:m)

tag.belongsToMany(gasto, {
  through: 'gastoTagMap',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

gasto.belongsToMany(tag, {
  through: 'gastoTagMap',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

// usuario <-> gasto = (1:n)

usuario.hasMany(gasto);
gasto.belongTo(usuario, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

// tag <-> orçamento = (1:n)

tag.hasMany(orcamento);
orcamento.belongTo(tag, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

// usuario <-> tag = (1: n)
usuario.hasMany(tag);
tag.belongTo(usuario, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

sequelize.sync({ alter: true }).then(console.log('DB is synced'));

export default sequelize;