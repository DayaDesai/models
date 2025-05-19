import { Sequelize, Model, DataTypes } from 'sequelize';

export class Category extends Model {
    public id!: string;
    public name!: string;
    public created_by!: string;
    public updated_by!: string;

    static initModel(connection: Sequelize) {
        Category.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true,
                },
                name: {
                    type: new DataTypes.STRING(255),
                    allowNull: false,
                },
                created_by: {
                    type: new DataTypes.INTEGER(),
                    allowNull: true,
                },
                updated_by: {
                    type: new DataTypes.INTEGER(),
                    allowNull: true,
                },
            },
            {
                tableName: 'category',
                sequelize: connection,
                freezeTableName: true,
                timestamps: true,  // adds createdAt and updatedAt
                paranoid: true,    // adds deletedAt (soft delete)
            }
        );
    }

    static initAssociations() {
        // Define associations here if needed
    }

    static initHooks() {
        // define hooks here
    }
}
