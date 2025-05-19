import { DataTypes, Model, Sequelize } from "sequelize";

export class Theme extends Model {
    public id!: string;
    public name!: string;
    public settings!: object;

    static initModel(connection: Sequelize) {
        Theme.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            settings: {
                type: DataTypes.JSON,
                allowNull: true,
            },
        }, {
            tableName: 'themes',
            sequelize: connection,
            timestamps: true,
            paranoid: true,
        });
    }

    static initAssociations() {
        // Define associations here if needed
    }

    static initHooks() {
        // define hooks here
    }
}