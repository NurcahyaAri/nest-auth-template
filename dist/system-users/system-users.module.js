"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const system_users_entity_1 = require("./system-users.entity");
const system_users_service_1 = require("./system-users.service");
const system_users_controller_1 = require("./system-users.controller");
const auth_module_1 = require("../auth/auth.module");
let SystemUsersModule = class SystemUsersModule {
};
SystemUsersModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([system_users_entity_1.SystemUsers]),
        ],
        exports: [
            system_users_service_1.SystemUsersService
        ],
        providers: [system_users_service_1.SystemUsersService],
        controllers: [system_users_controller_1.SystemUsersController]
    })
], SystemUsersModule);
exports.SystemUsersModule = SystemUsersModule;
//# sourceMappingURL=system-users.module.js.map