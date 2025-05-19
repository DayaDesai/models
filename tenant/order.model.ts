import { Sequelize, Model, DataTypes } from 'sequelize';

export class Order extends Model {
    public id!: string;
    public customer_id!: string;
    public order_date!: Date;
    public status!: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    public total_amount!: number;
    public created_by!: string;
    public updated_by!: string;

    static initModel(connection: Sequelize) {
        Order.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true,
                },
                customer_id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                },
                order_date: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW,
                },
                status: {
                    type: DataTypes.ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled'),
                    defaultValue: 'pending',
                    allowNull: false,
                },
                total_amount: {
                    type: DataTypes.DECIMAL(10, 2),
                    allowNull: false,
                },
                created_by: {
                    type: DataTypes.UUID,
                    allowNull: false,
                },
                updated_by: {
                    type: DataTypes.UUID,
                    allowNull: true,
                },
            },
            {
                tableName: 'orders',
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
