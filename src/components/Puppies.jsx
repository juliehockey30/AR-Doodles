import { Link } from 'react-router-dom'
import GrownUp1 from '../assets/GrownUp1.jpeg'
import GrownUp2 from '../assets/GrownUp2.jpeg'

const Puppies = () => {
  const importAll = (r) => {
    return r.keys().map(r)
  }

  const listOfImages = importAll(
    require.context('../assets/lastLitterPuppies', false, /\.(png|jpe?g|svg)$/)
  )

  return (
    <div className="pb-32 flex flex-col items-center">
      <p className="text-4xl text-darkPurple font-black text-center">
        The newest litter was born on July 17, 2022!
      </p>
      <p className="text-2xl text-darkPurple font-black text-center">
        Contact us today if you are interested in adopting a pup from this
        litter!
      </p>
      <Link
        className="bg-lightPurple hover:bg-darkPurple text-white mt-4 text-xl font-extrabold py-4 px-6 rounded-md"
        to="/contact"
      >
        CONTACT US
      </Link>
      <p className="text-4xl text-darkPurple font-black text-center mt-16">
        The last litter at 5 weeks old, born on June 15th, 2021
      </p>
      <div className="mx-8 mt-0 mb-12 flex flex-wrap justify-center">
        {listOfImages.map((image, index) => (
          <img className="max-h-96 m-2" key={index} src={image} />
        ))}
      </div>
      <p className="text-4xl text-darkPurple font-black text-center mt-16">
        2 pups from the last litter all grown up.
      </p>
      <div className="mx-8 mt-0 mb-12 flex flex-wrap justify-center">
        <img className="max-h-96 m-2" src={GrownUp1} />
        <img className="max-h-96 m-2" src={GrownUp2} />
      </div>
    </div>
  )
}

export default Puppies
