"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("@src/controllers/user/user.controller");
const user = new user_controller_1.UserController();
exports.default = {
    Query: {
        getUserById: user.getUserById,
        getUsers: user.getUsers,
    },
    Mutation: {
        createUser: user.create,
    },
};
//# sourceMappingURL=user.resolver.js.map