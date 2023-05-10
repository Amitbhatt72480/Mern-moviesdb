import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Form from '../components/Form'
import {MovieCon} from '../context/MovieContext'

const Main = () => {
	
	const {myMovies, setMovieData, toggleContext} = MovieCon()
	

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await fetch('/api/movies')
			const json = await response.json()
			if (response.ok) {
				setMovieData(json)
			}
			console.log(myMovies);
		}
		fetchMovies()
	}, [toggleContext])

	return (
		<React.Fragment>
			<Navbar />
			<div className="grid grid-cols-2">
				<div>
					{myMovies && myMovies.map((item) => {
						return <Card key={item._id} id={item._id} name={item.name} movie={item.movie} rating={item.rating} date={item.createdAt} />
					})}
				</div>
				<div className="">
					<h1 className='mt-20 mb-4 text-xl font-semibold mx-20'>Add your Movie here</h1>
					<Form />
				</div>
			</div>
		</React.Fragment>
	)
}

export default Main