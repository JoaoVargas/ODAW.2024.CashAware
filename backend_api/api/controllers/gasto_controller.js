import { where } from 'sequelize';
import sequelize from '../db/database.js';
const models = sequelize.models;

export async function getGasto(req, res) {
  try {
    const id = req.params.id
    const gasto = await models.usuario.findByPk(id)
    if (gasto) {
      res.json(gasto);
    } else {
      res.status(404).send(`Gasto com id ${id} não encontrado`);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getGastos(req, res) {
  try {
    const gastos = await models.gasto.findAll();
    res.json(gastos);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function createGasto(req, res) {
  try {
    const novoGasto = await models.gasto.create(req.body);
    res.json(gasto);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function updateGasto(req, res) {
  try {
    const id = req.params.id;
    const novoGasto = req.body;
    const gasto = await models.gasto.findByPk(id)
    if (gasto) {
      await models.gasto.update(
        novogasto,
        {
          where: { id: id }
        }
      )
      res.status(200).send();
    }
    else {
      res.status(404).send();
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function deleteGasto(req, res) {
  try {
    const id = req.params.id;

    await models.gasto.destroy({
      where: { id: id }
    })
    
    res.status(200).send();
  } catch (error) {
    res.status.send(error.message);
  }
}

export async function gastosPorUsuario(req, res) {
  try {
    const userId = req.params.userId;
    const gastos = await models.gasto.findAll({
      where: {
        userId: userId
      }
    })
    if ( gastos ) {
      res.json(gastos);
    } else {
      res.status(404).send('Gastos não encontrados!')
    }
  } catch ( error ) {
    res.status.send(error.message);
  }
}