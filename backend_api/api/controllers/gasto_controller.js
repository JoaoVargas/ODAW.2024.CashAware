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
    res.status(500).send(error);
  }
}

export async function getGastos(req, res) {
  try {
    const gastos = await models.gasto.findAll();
    res.json(gastos);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function createGasto(req, res) {
  try {
    const novoGasto = await models.gasto.create(req.body);
    res.json(gasto);
  } catch (error) {
    res.status(500).send(error);
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
    res.status(500).send(error);
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
    res.status(500).send(error);
  }
}


// // Fazer tabela associativa para recuperar gastos
// export async function gastosPorTag(req, res) {
//   try {
//     const tag_id = req.params.tag_id;
//     const ids = models.gasto_tag_map.find()
//   } catch(error) {
//     res.status(500).send(error);
//   }
// }