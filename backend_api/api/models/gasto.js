import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const gasto = sequelize.define('gasto', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(256),
            allowNull: false,
            validate: {
                is: /^[\w]+$/
            }
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1024),
            allowNull: true,
            validate: {
                is: /^[\w]+/
            }
        }
    })
  return gasto;
}