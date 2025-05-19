import { Sequelize } from "sequelize";
import { Role } from "./role.model";
import { Module } from "./module.model";
import { Feature } from "./feature.model";
import { Theme } from "./theme.model";
import { UserPermission } from "./user-permission.model";
import { ActivityLog } from "./activity-logs.model";
import { ErrorLog } from "./error-logs.model";
import { User } from "./user.model";

export const initMainMySQLModels = (connection: Sequelize) => {
    // Initialize models here
    Role.initModel(connection);
    Module.initModel(connection);
    UserPermission.initModel(connection);
    Feature.initModel(connection);
    Theme.initModel(connection);
    ActivityLog.initModel(connection);
    ErrorLog.initModel(connection);
    User.initModel(connection);

    // Initialize associations here
    Role.initAssociations();
    Module.initAssociations();
    UserPermission.initAssociations();
    Feature.initAssociations();
    Theme.initAssociations();
    ActivityLog.initAssociations();
    ErrorLog.initAssociations();
    User.initAssociations();

    // Initialize hooks here
}