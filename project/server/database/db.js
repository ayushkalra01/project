import mongoose from 'mongoose';

const Connection = async (username, password) => {
	const URL =
		'mongodb://user:codeforinterview@projectweb-shard-00-00.tt682.mongodb.net:27017,projectweb-shard-00-01.tt682.mongodb.net:27017,projectweb-shard-00-02.tt682.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-9ydc0s-shard-0&authSource=admin&retryWrites=true&w=majority';
	try {
		await mongoose.connect(URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useFindAndModify: false,
		});
		console.log('Database connected successfully');
	} catch (error) {
		console.log('Error while connecting to the database ', error);
	}
};

export default Connection;
