import { Sequelize, Model, DataTypes } from 'sequelize';

export class Payment extends Model {
  public id!: string;
  public order_id!: string;
  public payment_method!: 'credit_card' | 'paypal' | 'cod';
  public payment_status!: 'pending' | 'paid' | 'failed';
  public payment_date!: Date;

  static initModel(connection: Sequelize) {
    Payment.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        order_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        payment_method: {
          type: DataTypes.ENUM('credit_card', 'paypal', 'cod'),
          allowNull: false,
        },
        payment_status: {
          type: DataTypes.ENUM('pending', 'paid', 'failed'),
          allowNull: false,
          defaultValue: 'pending',
        },
        payment_date: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        tableName: 'payments',
        sequelize: connection,
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static initAssociations() {

  }

  static initHooks() {
    // define hooks here
  }
}
