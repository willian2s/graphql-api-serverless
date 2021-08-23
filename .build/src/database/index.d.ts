import { Mongoose } from 'mongoose';
export declare const connect: (mongoUrl: string) => Promise<Mongoose>;
export declare const close: () => Promise<void>;
