const express = require('express')
const router = express.Router()

const {
	createMovie,
	getMovies,
	getSingleMovie,
	deleteMovie,
	updateMovie
} = require('../controllers/movieController')


router.get('/', getMovies)

router.get('/:id', getSingleMovie)

router.post('/', createMovie)

router.delete('/:id', deleteMovie)

router.patch('/:id', updateMovie)

module.exports = router