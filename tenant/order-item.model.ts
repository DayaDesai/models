import { Sequelize, Model, DataTypes } from 'sequelize';

export class OrderItem extends Model {
  public id!: string;
  public order_id!: string;
  public product_id!: string;
  public quantity!: number;
  public unit_price!: number;

  static initModel(connection: Sequelize) {
    OrderItem.init(
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
        product_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        unit_price: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
      },
      {
        tableName: 'order_items',
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
