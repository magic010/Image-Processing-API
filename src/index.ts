import express from 'express';
import path from 'path';
import  imgRoute  from './routes/img-route';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', imgRoute);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server Listening On Port ${PORT}`));

export default app;
