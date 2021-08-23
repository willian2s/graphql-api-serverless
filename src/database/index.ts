import mongoose, { Mongoose } from 'mongoose';

export const connect = async (mongoUrl: string): Promise<Mongoose> =>
  await mongoose.connect(`${mongoUrl}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export const close = async () => await mongoose.connection.close();
