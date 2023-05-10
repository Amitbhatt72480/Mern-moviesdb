import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { MovieCon } from '../context/MovieContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Card = ({ id, name, movie, rating, date }) => {

	const { toggle } = MovieCon()
	const handleDelete = async () => {
		const response = await fetch('/api/movies/' + id, {
			method: 'DELETE'
		})
		if (response.ok) {
			toggle()
		}
	}


	return (
		<React.Fragment>
			<div className='m-10 shadow-2xl p-4 h-auto w-[500px]'>
				<div className="space-y-2 text-xl text-slate-700">
					<div className="flex items-center justify-between">
						<h1 className="mt-2">Name: {name}</h1>
						<div className="flex flex-col space-y-2">
							<AiOutlineDelete onClick={handleDelete} className='text-2xl hover:scale-105 duration-500' />
						</div>
					</div>
					<h1 className="">Movie: {movie}</h1>
					<h1 className="">Rating: {rating} <span className='block text-xs mt-2'>Created at:  {formatDistanceToNow(new Date(date), {addSuffix: true})}</span></h1>
				</div>
			</div>
			
		</React.Fragment>
	)
}

export default Card