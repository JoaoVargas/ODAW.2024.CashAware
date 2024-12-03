import sequelize from '../db/database.js';
const models = sequelize.models;


export async function getOrcamento(req, res) {
  try {
    const id = req.params.id;
    const orcamento = await models.orcamento.findByPk(id)

    if (orcamento) {
      res.json(orcamento);
    } else {
      res.status(404).send(`Orcamento com id: ${id} não encontrado!`);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getOrcamentos(req, res) {
  try {
    const orcamentos = await models.orcamento.findAll()

    if (orcamentos) {
      res.json(orcamentos);
    } else {
      res.status(404).send(`Orcamentos não encontrados!`);
    }

  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function createOrcamento(req, res) {
  try {
    const orcamento = await models.orcamento.create(req.body)

    if (orcamento) {
      res.json(orcamento);
    } else {
      res.status(404).send(`Orcamento não criado!`);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function updateOrcamento(req, res) {
  try {
    const novaOrcamento = req.body;
    const id = req.params.id;

    models.orcamento.findByPk(id).then(
      async (orcamento) => {
        if (orcamento) {
          await models.orcamento.update(
            novaOrcamento, 
            { 
              where: { 
                id: id 
              } 
            }
          )
          res.status(200).send(`Orcamento atualizado!`)
        } else {
          res.status(404).send(`Orcamento não atualizado!`);
        }
      }
    )
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function deleteOrcamento(req, res) {
  try {
    const id = req.params.id;

    models.orcamento.destroy({
      where: {
        id
      }
    })
    .then(res.status(200).send(`Orcamento não deletado!`))
  } catch (error) {
    res.status(500).send(error.message);
  }
}