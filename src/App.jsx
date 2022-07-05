import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Puppies from './components/Puppies'
import Dogs from './components/Dogs'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="font-arima">
      <NavBar />
      <div className="pt-32">
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
