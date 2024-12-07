import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import lectureRouters from './routes/Lectures.routes.js';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get('/', (req, res) => {
	res.send("Hello World");
});

app.use('/api', lectureRouters);

// app.use((req, res, next) => {
// 	console.log(`Mount in: ${req.baseUrl}`); // '/api'
// 	next();
// });

app.listen(4000);
console.log("Server started on port 4000");