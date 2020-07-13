import { Schema, model } from 'mongoose';

const CommentSchema = new Schema({
    commentId: String,
    username: String,
    comment: String
});
export default model('Comment', CommentSchema);