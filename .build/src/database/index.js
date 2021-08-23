"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connect = async (mongoUrl) => await mongoose_1.default.connect(`${mongoUrl}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
exports.connect = connect;
const close = async () => await mongoose_1.default.connection.close();
exports.close = close;
//# sourceMappingURL=index.js.map