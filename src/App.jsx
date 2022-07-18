import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Dogs from './components/Dogs'
import FAQ from './components/FAQ'
import Home from './components/Home'
import NavBar from './components/NavBar'
import NavBarMobile from './components/NavBarMobile'
import Pupdate from './components/Pupdate'
import Puppies from './components/Puppies'

const App = () => {
  return (
    <div className="font-arima">
      <NavBar />
      <NavBarMobile />
      <Pupdate />
      <div className="md:pt-64 pt-36">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
