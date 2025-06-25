import Designer from "./components/Designer"
import FeaturedIn from "./components/FeaturedIn"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OutfitIdeas from "./components/OutfitIdeas"
import PerfectFit from "./components/PerfectFit"
import Reviews from "./components/Reviews"
import Suits from "./components/Suits"


function App() {

  return (
    <div>
      <Hero />
      <Navbar />
      <Suits />
      <Designer />
      <OutfitIdeas />
      <Features />
      <PerfectFit />
      <FeaturedIn />
      <Reviews />
    </div>
  )
}

export default App
