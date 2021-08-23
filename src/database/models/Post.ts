import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Post', schema);
