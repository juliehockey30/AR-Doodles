import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HamburgerIcon from '../assets/HamburgerIcon.png'
import LogoWhiteMobile from '../assets/logoWhiteMobile.png'

const NavLink = ({ isSelected, onClick, text, to }) => {
  return (
    <Link
      className={`${
        isSelected ? 'text-darkPurple' : 'text-white'
      } tracking-widest text-xl font-bold mx-8 py-4 px-2 w-max`}
      onClick={onClick}
      to={to}
    >
      {text}
    </Link>
  )
}

const NavBar = () => {
  const location = useLocation()
  const currentPathName = location.pathname

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)

  return (
    <div className="bg-lightPurple fixed z-20 h-24 w-full flex justify-between items-center md:hidden px-4">
      <Link onClick={() => setShowHamburgerMenu(false)} to="/">
        <img className="h-16" src={LogoWhiteMobile} />
      </Link>
      <div className="relative">
        <button onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}>
          <img className="h-16" src={HamburgerIcon} />
        </button>
        {showHamburgerMenu ? (
          <div className="bg-lightPurple -right-4 flex flex-col absolute z-30">
            <NavLink
              isSelected={currentPathName === '/dogs'}
              onClick={() => setShowHamburgerMenu(false)}
              text="Our Dogs"
              to="/dogs"
            />
            <NavLink
              isSelected={currentPathName === '/puppies'}
              onClick={() => setShowHamburgerMenu(false)}
              text="Our Puppies"
              to="/puppies"
            />
            <NavLink
              isSelected={currentPathName === '/faq'}
              onClick={() => setShowHamburgerMenu(false)}
              text="FAQ"
              to="/faq"
            />
            <NavLink
              isSelected={currentPathName === '/contact'}
              onClick={() => setShowHamburgerMenu(false)}
              text="Contact"
              to="/contact"
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default NavBar
