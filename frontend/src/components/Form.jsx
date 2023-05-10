import React, { useState } from 'react'
import { MovieCon } from '../context/MovieContext'

const Form = () => {

	const {toggle} = MovieCon()
	const [name, setName] = useState('')
	const [movie, setMovie] = useState('')
	const [rating, setRating] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async (e) =>{
		e.preventDefault()

		const myMovie = {name, movie, rating}

		const response = await fetch('/api/movies', {
			method: 'POST',
			body: JSON.stringify(myMovie),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		toggle()

		const json = await response.json()

		if (response.ok){
			setError('')
			setName('')
			setMovie('')
			setRating('')
		}

		if (!response.ok){
			setError(json.error)
		}
		
	}

  return (
	<form onSubmit={handleSubmit} className='bg-gray-200  p-10 mx-20 shadow-2xl rounded-2xl'>
		<div className="py-6 flex flex-col text-xl ">
			<label>Name: </label>
			<input value={name} onChange={(e)=>{setName(e.target.value)}}
			 className='py-1 rounded-2xl mr-40 px-3 mt-2' type="text" />
		</div>
		<div className="py-6 flex flex-col text-xl ">
			<label>Movie: </label>
			<input value={movie} onChange={(e)=>{setMovie(e.target.value)}}
			 className='py-1 rounded-2xl mr-40 px-3 mt-2' type="text" />
		</div>
		<div className="py-6 flex flex-col text-xl ">
			<label>Rating: </label>
			<input value={rating} onChange={(e)=>{setRating(e.target.value)}}
			 className='py-1 rounded-2xl mr-40 px-3 mt-2' type="number" />
		</div>
		<button className='mt-2 bg-blue-500 px-6 py-2 text-white rounded-xl' type="submit">Submit</button>
		{error && <h1>{error}</h1>}
	</form>
  )
}

export default Form