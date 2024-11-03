import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Available from '../components/Available'

function Home() {
  console.log("testing home logs")
  return (
    <div>
      <Navigation ></Navigation>
      <Hero></Hero>
      <Available />
    </div>

  )
}

export default Home