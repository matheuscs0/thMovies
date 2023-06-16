import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import './Movies.css'
import { BiTimeFive } from 'react-icons/bi'


const Movie = () => {
  const moviesURL = import.meta.env.VITE_API
  const apiKey = import.meta.env.VITE_API_KEY

  const {id} = useParams()
  const [movie, setMovie] =useState(null)

  const getMovie = async(url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }
  const formatCurrency = (number) => {
    return number.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    })
  }
  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`
    getMovie(movieUrl)
  }, [])

  return (  
    <div className="Page">
      <div className="moviePage">
      {movie && (
        <>
        <MovieCard movie={movie} showLink={false}/>
        <div className="infosMovie">
        <div className="infos">
        <div className="info-genre">
          <h3>
            Gênero
          </h3>
          <p>{movie.genres.map((genre) => (
      <span key={genre.id}>{genre.name} </span>
    ))}</p>
        </div>
        <div className="info">
          <h3>
            Aprovação do Publico:
          </h3>
          <p>{movie.popularity}</p>
        </div>
        <div className="info">
          <h3>
            Receita:
          </h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </div>
        <div className="info">
          <h3>
            Duração:
          </h3>
          <p><BiTimeFive/> {movie.runtime} min</p>
        </div>
        </div>
        <div className="description">
          <h3>
            Descrição:
          </h3>
          <p>{movie.overview}</p>
        </div>
        </div>
        </>
      )}
      </div>
    </div>
  )
}

export default Movie