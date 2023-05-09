const express = require('express')
require('dotenv').config()
const movieRoutes = require('./routes/movieRoutes')
const app = express()
const mongoose = require('mongoose')

app.use(express.json());
app.use('/api/movies', movieRoutes)

mongoose.connect(process.env.URL).then(()=>{
	app.listen(process.env.PORT, ()=>{
		console.log('Listening to PORT', process.env.PORT);
	})
}).catch((err)=>{
	console.log(err);
})