import { Sequelize, Model, DataTypes } from 'sequelize';

export class SubCategory extends Model {
    public id!: string;
    public name!: string;
    public category_id!: string;
    public created_by!: string;
    public updated_by!: string;

    static initModel(connection: Sequelize) {
        SubCategory.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: new DataTypes.STRING(255),
                allowNull: false
            },
            category_id: {
                type: new DataTypes.UUID,
                allowNull: false
            },
            created_by: {
                type: DataTypes.UUID,
                allowNull: false
            },
            updated_by: {
                type: DataTypes.UUID,
                allowNull: true
            }
        }, {
            tableName: 'sub_category',
            sequelize: connection,
            freezeTableName: true,
            timestamps: true,
            paranoid: true,
        });
    }

    static initAssociations() {

    }

    static initHooks() {
        // define hooks here
    }
}