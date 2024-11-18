import sequelize from '../db/database.js';
const models = sequelize.models;


export async function getUsuario(req, res, next) {
  const id = req.params.id;

  const usuario = await models.usuario.findByPk(id)
    .catch(next);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).send(`User with id ${id} not found!`);
  }
}

export function getUsuarios(req, res, next) {
  models.usuario.findAll()
    .then(usuarios => {
      res.json(usuarios)
    }).catch(next);
}

export function createUsuario(req, res, next) {
  models.usuario.create(req.body)
    .then(usuario => {
      res.json(usuario)
    })
    .catch(next);
}

export function updateUsuario(req, res, next) {
  const novoUsuario = req.body;
  const id = req.params.id;

  models.usuario.findByPk(id).then(
    async (usuario) => {
      if (usuario) {
        await models.usuario.update(
          novoUsuario, 
          { 
            where: { 
              id 
            } 
          }
        )
        res.status(200).send()
      } else {
        res.status(404).send();
      }
    }
  )
  .catch(next);
}

export function deleteUsuario(req, res, next) {
  const id = req.params.id;

  models.usuario.destroy({
    where: {
      id
    }
  })
  .then(res.status(200).send())
  .catch(next);
}