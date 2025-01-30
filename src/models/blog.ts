import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { IBlog } from '../types';

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Blog = mongoose.model('Blog', blogSchema, 'GautoBlog');

export default Blog;
