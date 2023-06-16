import { Link } from "react-router-dom"
import {FaStar} from 'react-icons/fa'


const imageUrl =  import.meta.env.VITE_IMG

const MovieCard = ({movie , showLink = true}) => {
  return (
   <div className="MovieCard"><Link to={`/movie/${movie.id}`}
   initial={{scale:0.95}}
   animate={{scale:1}}
   >
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar/>{movie.vote_average}
      </p>
     </Link>
    </div>
  )
}

export default MovieCard