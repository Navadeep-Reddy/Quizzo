import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Available from '../components/Available'
import Statistics from '../components/Statistics'

function Home() {
  return (
    <div>
      <Navigation ></Navigation>
      <Hero></Hero>
      <Available />
      <Statistics />
    </div>

  )
}

export default Home