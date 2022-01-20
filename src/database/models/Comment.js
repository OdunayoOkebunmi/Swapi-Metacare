import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
  movieID: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  userIP: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
