import { DataTypes } from 'sequelize';

export default (sequelize) => {
  sequelize.define('orcamento', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    valor: {
      type: DataTypes.DECIMAL(9, 3), // Até 10 dígitos no total, com 2 decimais.
      allowNull: false,
      validate: {
        isDecimal: true, // Valida que é um número decimal.
        min: 0,          // Garante que o valor seja positivo.
      },
    },
    data_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true, // Valida que o valor seja uma data válida.
      },
    },
    data_fim: {
      type: DataTypes.DATE,
      allowNull: true, // Opcional, caso a data de término não seja sempre conhecida.
      validate: {
        isDate: true, // Valida que o valor seja uma data válida.
        isAfterStart(value) {
          if (value && this.data_inicio && new Date(value) < new Date(this.data_inicio)) {
            throw new Error('data_fim deve ser posterior a data_inicio');
          }
        },
      },
    },
    tag_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tags', // Nome da tabela referenciada
        key: 'id', // Nome da coluna referenciada
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  })
};