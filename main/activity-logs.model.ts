// models/activity-log.model.ts
import { Sequelize, Model, DataTypes } from 'sequelize';

export class ActivityLog extends Model {
    public id!: string;
    public user_id!: string;
    public action!: string;
    public description!: string;
    public created_at!: Date;

    static initModel(connection: Sequelize) {
        ActivityLog.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            action: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
        }, {
            tableName: 'activity_logs',
            sequelize: connection,
            timestamps: false,
        });
    }

    static initAssociations() {
        // Define associations here if needed
    }

    static initHooks() {
        // define hooks here
    }
}