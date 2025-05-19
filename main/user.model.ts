import { Sequelize, Model, DataTypes } from 'sequelize';

export class User extends Model {
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
    public mobile_no!: string;

    static initModel(connection: Sequelize) {
        User.init(
            {
                id: {
                    type: new DataTypes.UUID(),
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true,
                },
                name: {
                    type: new DataTypes.STRING(255),
                    allowNull: false,
                },
                email: {
                    type: new DataTypes.STRING(255),
                    allowNull: false,
                    defaultValue: true,
                },
                password: {
                    type: new DataTypes.STRING(255),
                    allowNull: false,
                    defaultValue: false,
                },
                mobile_no: {
                    type: new DataTypes.STRING(20),
                    allowNull: true,
                }
            },
            {
                tableName: 'user',
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
