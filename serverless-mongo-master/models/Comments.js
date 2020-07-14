import { Schema, model } from 'mongoose';

const CommentsSchema = new Schema({
    commentId: String,
    username: String,
    comment: String
});
export default model('Comments', CommentsSchema);