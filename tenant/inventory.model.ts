import { Sequelize, Model, DataTypes } from 'sequelize';

export class Inventory extends Model {
    public id!: string;
    public product_id!: string;
    public quantity_available!: number;
    public warehouse_location!: string | null;
    public created_by!: string;
    public updated_by!: string;

    static initModel(connection: Sequelize) {
        Inventory.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true,
                },
                product_id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                },
                quantity_available: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                },
                warehouse_location: {
                    type: DataTypes.STRING(255),
                    allowNull: true,
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
                tableName: 'inventory',
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
