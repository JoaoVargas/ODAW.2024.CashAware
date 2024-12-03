import { DataTypes } from 'sequelize';

export default (sequelize) => {
  sequelize.define('tag', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(64),
      allowNull: false,
			unique: true,
			validate: {
				is: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9]+(?: [A-Za-zÀ-ÖØ-öø-ÿ0-9]+)*$/, 
        len: [1, 64],
			}
    },
    decricao: {
      type: DataTypes.STRING(256),
      allowNull: false,
			unique: true,
			validate: {
				is: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9]+(?: [A-Za-zÀ-ÖØ-öø-ÿ0-9]+)*$/, 
        len: [1, 256],
			}
    },
    cor: {
      type: DataTypes.STRING(7),
      allowNull: false,
      validate: {
        len: [4, 7],
        is: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      },
    },
  })
};
