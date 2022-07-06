import { Link } from 'react-router-dom'
import Doodles from '../assets/LabAndGolden.jpg'

const Home = () => {
  return (
    <div className="flex flex-col items-center pb-20 md:pb-0">
      <h1 className="text-4xl text-darkPurple font-black">
        Doodle Puppy Breeder
      </h1>
      <h3 className="text-2xl text-darkPurple font-black">Aurora, CO</h3>
      <div className="md:hidden contents">
        <p className="text-2xl text-darkPurple font-black text-center mt-12">
          Contact us today if you are interested in adopting one of our puppies!
        </p>
        <Link
          className="mt-8 mb-20 bg-lightPurple hover:bg-darkPurple text-white text-xl font-extrabold py-4 px-6 rounded-md"
          to="/contact"
        >
          CONTACT US
        </Link>
      </div>
      <img
        className="md:max-w-[50rem] max-w-sm md:mt-12 md:ml-0 ml-2 static"
        src={Doodles}
      />
    </div>
  )
}

export default Home
