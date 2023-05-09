const mongoose = require('mongoose')

const Schema = mongoose.Schema

const moviesSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		movie: {
			type: String,
			required: true
		},
		rating: {
			type: Number,
			required: true
		},
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Movied_db", moviesSchema)