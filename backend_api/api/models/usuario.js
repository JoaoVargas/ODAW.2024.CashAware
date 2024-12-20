import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

export default (sequelize) => {
  sequelize.define('usuario', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false,
			unique: true,
			validate: {
				is: /^\w{3,64}$/, //a-z, A-Z, 0-9, _, tamanho de 3 -> 64
        len: [3, 64],
			}
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        len: [6, 64],
        is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&_])[A-Za-z0-9@$!%*?&_]{6,64}$/,
      },
    },
    email: {
        type: DataTypes.STRING(256),
        allowNull: false,
        validate: {
            is: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
        }
    },
    nome: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
            is: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[\s'-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/
        }
    },
  })
  .beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
  })
  .beforeUpdate(async (user) => {
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  });
};
