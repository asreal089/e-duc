import express from 'express';
import routes from './routes';

const app = express();

const PORT = process.env.PORT || 8585;

app.use(express.json());
app.use(routes);

app.listen(PORT);
