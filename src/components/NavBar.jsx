import { Link, useLocation } from 'react-router-dom'
import LogoWhite from '../assets/logoWhite.png'

const NavLink = ({ isSelected, text, to }) => {
  return (
    <Link
      className={`${
        isSelected ? 'text-darkPurple' : 'text-white'
      } tracking-widest text-xl font-bold mx-8`}
      to={to}
    >
      {text}
    </Link>
  )
}

const NavBar = () => {
  const location = useLocation()
  const currentPathName = location.pathname

  return (
    <div className="bg-lightPurple fixed z-20 h-32 w-full hidden md:flex justify-center items-center">
      <NavLink
        isSelected={currentPathName === '/dogs'}
        text="Our Dogs"
        to="/dogs"
      />
      <NavLink
        isSelected={currentPathName === '/puppies'}
        text="Puppies"
        to="/puppies"
      />
      <Link className="mx-12" to="/">
        <img className="w-4- h-24" src={LogoWhite} />
      </Link>
      <NavLink isSelected={currentPathName === '/faq'} text="FAQ" to="/faq" />
      <NavLink
        isSelected={currentPathName === '/contact'}
        text="Contact"
        to="/contact"
      />
    </div>
  )
}

export default NavBar
