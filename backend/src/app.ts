import express, { Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
// import userRoutes from './routes/user.routes';

const app: Application = express();

// Middlewares globais
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

// Rotas
// app.use('/api/users', userRoutes);

export default app;
