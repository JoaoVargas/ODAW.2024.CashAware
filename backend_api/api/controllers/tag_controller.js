import sequelize from '../db/database.js';
const models = sequelize.models;


export async function getTag(req, res) {
  try {
    const id = req.params.id;
    const tag = await models.tag.findByPk(id)

    if (tag) {
      res.json(tag);
    } else {
      res.status(404).send(`Tag com id: ${id} não encontrada!`);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getTags(req, res) {
  try {
    const tags = await models.tag.findAll()

    if (tags) {
      res.json(tags);
    } else {
      res.status(404).send(`Tags não encontradas!`);
    }

  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function createTag(req, res) {
  try {
    const tag = await models.tag.create(req.body)

    if (tag) {
      res.json(tag);
    } else {
      res.status(404).send(`Tag não criada!`);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function updateTag(req, res) {
  try {
    const novaTag = req.body;
    const id = req.params.id;

    models.tag.findByPk(id).then(
      async (tag) => {
        if (tag) {
          await models.tag.update(
            novaTag, 
            { 
              where: { 
                id: id 
              } 
            }
          )
          res.status(200).send(`Tag atualizada!`)
        } else {
          res.status(404).send(`Tag não atualizada!`);
        }
      }
    )
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function deleteTag(req, res) {
  try {
    const id = req.params.id;
    await models.tag.destroy({
      where: {
        id
      }
    })
    res.status(200).send(`Tag deletada!`)
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function tagsPorUsuario(req, res) {
  try {
    const userId = req.params.userId;
    const tags = await models.tag.findAll({
      where: {
        userId: userId,
      }
    })
    if ( tags ) {
      res.json(tags);
    } else {
      res.send(404).send("Tags não encontradas!");
    }
  } catch (error) {
    res.send(500).send(error.message);
  }
}