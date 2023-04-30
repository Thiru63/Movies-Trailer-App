import Hero from '../hero/Hero';
import "./Home.css"

const Home = ({movies}) => {

if(!movies) return <h1>Loading...</h1>

  return (
    <Hero movies = {movies} />
  )
}

export default Home