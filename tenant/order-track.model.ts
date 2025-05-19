import { Sequelize, Model, DataTypes } from 'sequelize';

export class OrderTrack extends Model {
  public id!: string;
  public order_id!: string;
  public status!: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  public remark!: string | null;
  public updated_by!: string;

  static initModel(connection: Sequelize) {
    OrderTrack.init(
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
        status: {
          type: DataTypes.ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled'),
          allowNull: false,
        },
        remark: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        updated_by: {
          type: DataTypes.UUID,
          allowNull: false,
        },
      },
      {
        tableName: 'order_track',
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
