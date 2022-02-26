import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
//for images

//components
import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
	console.log(`Server is running successfully on PORT ${PORT}`)
);
const URL =
	'mongodb://user:codeforinterview@projectweb-shard-00-00.tt682.mongodb.net:27017,projectweb-shard-00-01.tt682.mongodb.net:27017,projectweb-shard-00-02.tt682.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-9ydc0s-shard-0&authSource=admin&retryWrites=true&w=majority';
Connection(process.env.MONGODB_URI || URL);
