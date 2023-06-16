import { useState, useEffect, useRef } from 'react'
import MovieCard from '../components/MovieCard'
import './MovieGrid.css'
import {motion} from 'framer-motion'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const UpComing = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) =>{
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() =>{
    const topRatedUrl = `${moviesURL}upcoming?${apiKey}&region=BR`

    getTopRatedMovies(topRatedUrl)

  }, [])

  const carousel = useRef()
  const[width, setWidth] = useState(0)
    useEffect(()=>{
      console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])    
return (
    <motion.div className="container" whileTap={{ cursor: "grabbing"}}>
      <div className='title-container'><h2>Em Breve 📢</h2></div>
      <motion.div className="movies-container"
      drag= "x"
      dragConstraints={{rigth: 5920, left: - 5750}}
      initial={{x:100}}
      animate={{x:0}}
      transition={{duration: 0.8}}
      whileTap={{ cursor: "grabbing"}}
     >
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </motion.div>
    </motion.div>

  )
}

export default UpComing