import { createContext, useContext, useState } from "react";


const MovieContext = createContext()

export const MovieContextProvider = ({children}) =>{

	const [myMovies, setMyMovies] = useState(null)
	const [toggleContext, setToggleContext] = useState(false)

	const setMovieData = (data) =>{
		setMyMovies(data)
	}

	const toggle = () =>{
		setToggleContext((prev)=>{
			return !prev
		})
	}

	return (
		<MovieContext.Provider value={{myMovies, setMovieData, toggleContext, toggle}}>
			{children}
		</MovieContext.Provider>
	)
}

export const MovieCon = () =>{
	return useContext(MovieContext)
}
