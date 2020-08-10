import express from 'express';
import routes from './routes';
import cors from 'cors';
const app = express();

const PORT = process.env.PORT || 8585;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT);
