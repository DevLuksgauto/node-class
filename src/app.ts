import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './routes/blogRoutes';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const dbURI = process.env.DATABASE_URL!;
const PORT = process.env.PORT;

mongoose
  .connect(dbURI)
  .then(() => app.listen(PORT))
  .catch((err) => console.log(err));

app.use(express.static('public'));
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req: Request, res: Response, next: NextFunction) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req: Request, res: Response) => res.redirect('/blogs'));

app.get('/about', (req: Request, res: Response) =>
  res.render('about', { title: 'About' })
);

app.use('/blogs', router);

app.use((req: Request, res: Response) =>
  res.status(404).render('404', { title: '404' })
);
