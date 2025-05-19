import { DataTypes, Model, Sequelize } from "sequelize";

export class Role extends Model {
    public id!: string;
    public name!: string;
    public description!: string;

    static initModel(connection: Sequelize) {
        Role.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        }, {
            tableName: 'roles',
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