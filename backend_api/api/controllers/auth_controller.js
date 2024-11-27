import sequelize from '../db/database.js';
const models = sequelize.models;
import bcrypt from 'bcrypt';


export async function register(req, res) {
  const { username, password } = req.body;

  try {
    if (!req.body) {
      res.status(400).send('Erro com parametros');
      return
    }

    const usuarioExistente = await models.usuario.findOne({ 
      where: { 
        username 
      } 
    });

    if (usuarioExistente) {
      res.status(400).send('Usuário já existe');
      return
    }

    const novoUsuario = await models.usuario.create({ 
      username, 
      password 
    });

    res.status(201).json({ 
      message: 'Usuário registrado com sucesso', 
      user: novoUsuario 
    });

  } catch (error) {
    res.status(400).send(error.message);
    return
  }
}

export async function login(req, res) {
  const { username, password } = req.body;

  try {
    if (!req.body) {
      res.status(400).send('Erro com parametros');
      return
    }

    const usuario = await models.usuario.findOne({
      where: {
        username: username
      }
    })

    if (!usuario) {
      res.status(200).json({
        error: 'Usuário não encontrado'
      });
      return
    } 

    const validado = await bcrypt.compare(password, usuario.password)

    if (!validado) {
      res.status(200).json({
        error: 'Senha incorreta'
      });
      return
    }

    res.status(200).json({
      user: usuario
    })

  } catch (error) {
    res.status(400).send('error.message');
    return
  }
}

