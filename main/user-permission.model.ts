import { DataTypes, Model, Sequelize } from "sequelize";

export class UserPermission extends Model {
    public id!: string;
    public role_id!: string;
    public module_id!: string;
    public is_create!: boolean;
    public is_read!: boolean;
    public is_update!: boolean;
    public is_delete!: boolean;

    static initModel(connection: Sequelize) {
        UserPermission.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            role_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            module_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            is_create: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            is_read: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            is_update: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            is_delete: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        }, {
            tableName: 'user_permissions',
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