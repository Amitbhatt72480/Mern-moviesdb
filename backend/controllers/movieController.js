const Movie = require('../models/movieModel')
const mongoose = require('mongoose')


// GET ALL MOVIES.

const getMovies = async (req, res) =>{
	const movie = await Movie.find({}).sort({createdAt: -1})
	res.status(200).json(movie)
}


// GET A SINGLE MOVIE

const getSingleMovie = async (req, res) =>{
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id)){
		return res.status(400).json({error: 'No such Movie'})
	}

	const movie = await Movie.findById(id)
	if (!movie){
		return res.status(400).json({error: 'No such Movie'})
	}
	res.status(200).json(movie)
}


// Create a New Movie

const createMovie = async (req, res) =>{
	const { name, movie, rating } = req.body
	try {
		const mymovie = await Movie.create({name, movie, rating})
		res.status(200).json(mymovie)
	} catch (error) {
		res.status(400).json({err: error.message})
	}
}

// Delete a Movie 

const deleteMovie = async (req, res) =>{
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id)){
		return res.status(400).json({error: 'No such Movie'})
	}

	const mymovie = await Movie.findOneAndDelete({_id: id})
	if (!mymovie){
		return res.status(400).json({error: 'No such Workout'})
	}
	res.status(200).json(mymovie)
}


// Update a Movie

const updateMovie = async (req, res) =>{
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id)){
		return res.status(400).json({error: 'No such Movie'})
	}

	const mymovie = await Movie.findByIdAndUpdate({_id: id}, {
		...req.body
	})

	if (!mymovie){
		return res.status(400).json({err: 'No such movie'})
	}
	res.status(200).json(mymovie)
}

module.exports = {
	createMovie,
	getMovies, 
	getSingleMovie,
	deleteMovie,
	updateMovie
}