"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const creat_dtos_1 = require("./dtos/creat.dtos");
const update_dots_1 = require("./dtos/update.dots");
let UserController = exports.UserController = class UserController {
    constructor() {
        this.i = 0;
    }
    findAll(tab) {
        tab = ['aboumadi', 'zchbani', 'rmerzak'];
        return `tha value is ${tab[this.i + 2]}`;
    }
    findOne(val) {
        return `the user is ${val}`;
    }
    CreatUser(val) {
        return val;
    }
    Updateuser(up_val) {
        up_val.id = 16500;
        return up_val;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('T')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", String)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [creat_dtos_1.creat_dtos]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "CreatUser", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dots_1.update_dto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "Updateuser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user')
], UserController);
//# sourceMappingURL=user.controller.js.map