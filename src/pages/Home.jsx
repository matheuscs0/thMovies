import Form from "../components/Form"
import NowPlaying from "../components/NowPlaying"
import Popular from "../components/Popular"
import TopRated from "../components/TopRated"
import UpComing from "../components/UpComing"

const Home = () => {
  return (
    <div className="Home">
      <div className="formSearch"><Form/></div>
      <div><NowPlaying/></div>
      <div><TopRated/></div>
      <div><Popular/></div>
      <div><UpComing/></div>
    </div>
  )
}

export default Home