import mongoose, { Document, Schema } from 'mongoose';

const schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: String,
  active: {
    type: Boolean,
    required: true,
  },
});

type User = Document & {
  _id?: String;
  firstName: String;
  lastName: String;
  email: String;
  active: Boolean;
};

const User = mongoose.model<User>('User', schema);

export { User };
