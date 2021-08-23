"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("@src/database/models/User");
class UserController {
    async create(_, args) {
        const { firstName, lastName, email, active } = args.data;
        const user = new User_1.User({
            firstName,
            lastName,
            email,
            active,
        });
        const result = await user.save();
        return result;
    }
    async getUserById(_, args) {
        const { _id: id } = args;
        const user = await User_1.User.findById(id);
        return user;
    }
    async getUsers() {
        const users = await User_1.User.find();
        return users;
    }
    async updateUser(_, args) {
        const { _id: id } = args;
        const { ...data } = args;
        const updatedUser = await User_1.User.findByIdAndUpdate(id, data);
        return updatedUser;
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map