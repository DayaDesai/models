import { Sequelize } from "sequelize";
import { Product } from "./product.model";
import { Category } from "./category.model";
import { SubCategory } from "./sub-category.model";
import { Order } from "./order.model";
import { OrderItem } from "./order-item.model";
import { Customer } from "./customer.model";
import { OrderTrack } from "./order-track.model";
import { Payment } from "./payment.model";
import { Inventory } from "./inventory.model";

export const initTenantMySQLModels = (connection: Sequelize) => {
    // Initialize models here
    Category.initModel(connection);
    SubCategory.initModel(connection);
    Product.initModel(connection);
    Inventory.initModel(connection);
    Customer.initModel(connection);
    Order.initModel(connection);
    OrderItem.initModel(connection);
    OrderTrack.initModel(connection);
    Payment.initModel(connection);

    // Initialize associations here
    Product.initAssociations();
    Category.initAssociations();
    SubCategory.initAssociations();
    Product.initAssociations();
    Inventory.initAssociations();
    Customer.initAssociations();
    Order.initAssociations();
    OrderItem.initAssociations();
    OrderTrack.initAssociations();
    Payment.initAssociations();

    // Initialize hooks here
}