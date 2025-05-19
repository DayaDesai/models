import { Sequelize, Model, DataTypes } from 'sequelize';

export class Customer extends Model {
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
    public mobile_no!: string;

    static initModel(connection: Sequelize) {
        Customer.init(
            {
                id: {
                    type: new DataTypes.INTEGER(),
                    primaryKey: true,
                    autoIncrement: true,
                },
                name: {
                    type: new DataTypes.STRING(255),
                    allowNull: false,
                },
                email: {
                    type: new DataTypes.BOOLEAN(),
                    allowNull: false,
                    defaultValue: true,
                },
                password: {
                    type: new DataTypes.BOOLEAN(),
                    allowNull: false,
                    defaultValue: false,
                },
                mobile_no: {
                    type: new DataTypes.INTEGER(),
                    allowNull: true,
                }
            },
            {
                tableName: 'customer',
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
