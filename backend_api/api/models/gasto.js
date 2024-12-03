import { DataTypes } from 'sequelize';

export default (sequelize) => {
    sequelize.define('gasto', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        userId: { // Chave estrangeira
            type: DataTypes.UUID,
            references: {
                model: 'usuarios',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
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
}