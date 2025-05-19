import { DataTypes, Model, Sequelize } from "sequelize";

export class ErrorLog extends Model {
    public id!: string;
    public message!: string;
    public stack_trace!: string;
    public route!: string;
    public created_at!: Date;
  
    static initModel(connection: Sequelize) {
      ErrorLog.init({
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        message: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        stack_trace: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        route: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      }, {
        tableName: 'error_logs',
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