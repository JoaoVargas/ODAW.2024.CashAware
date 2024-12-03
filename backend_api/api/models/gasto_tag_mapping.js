import { DataTypes } from 'sequelize';

export default (sequelize) => {
  sequelize.define('gasto_tag_map', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    tag_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tags',
        key: 'id',
      },
      onUpdate: 'CASCADE', // O certo seria apagar a entrada inteira
      onDelete: 'CASCADE',
    },
    gasto_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'gastos',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }
  })
}