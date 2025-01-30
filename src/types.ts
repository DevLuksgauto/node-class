import { Document } from 'mongoose';

export type IBlog = {
  title: string;
  snippet: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
} & Document;
