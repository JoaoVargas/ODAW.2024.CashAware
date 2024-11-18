import { DataTypes } from 'sequelize';

export default (sequelize) => {
  sequelize.define('usuario', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    }
  });
};
