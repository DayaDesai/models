import { Sequelize, Model, DataTypes } from 'sequelize';

export class Product extends Model {
    public id!: string;
    public name!: string;
    public sub_category_id!: string;
    public created_by!: string;
    public updated_by!: string;

    static initModel(connection: Sequelize) {
        Product.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: new DataTypes.STRING(255),
                allowNull: false
            },
            sub_category_id: {
                type: DataTypes.UUID,
                allowNull: false,
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
            tableName: 'product',
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