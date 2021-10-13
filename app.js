const express = require ('express');
const { connect } = require('./utils/db');
const  characterRoutes  = require('./routes/character.routes')

const app = express();
const PORT = 3000;

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/characters', characterRoutes)

app.use('*', (req, res, next) => {
	const error = new Error('Route not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT)
})

