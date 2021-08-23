import { User } from '@src/database/models/User';
export declare class UserController {
    create(_: any, args: any): Promise<User>;
    getUserById(_: any, args: any): Promise<User | null>;
    getUsers(): Promise<User[]>;
    updateUser(_: any, args: any): Promise<User | null>;
}
