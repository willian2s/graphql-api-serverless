import mongoose, { Document } from 'mongoose';
declare type User = Document & {
    _id?: String;
    firstName: String;
    lastName: String;
    email: String;
    active: Boolean;
};
declare const User: mongoose.Model<User, {}>;
export { User };
