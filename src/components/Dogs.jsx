import Lulu1 from '../assets/Lulu1.jpg'
import Lulu2 from '../assets/Lulu2.jpg'
import Lumi1 from '../assets/Lumi1.jpg'
import Lumi2 from '../assets/Lumi2.jpg'
import LunaAndLumi from '../assets/LunaAndLumi.jpg'

const Dogs = () => {
  return (
    <div className="md:pb-16 pb-32">
      <p className="text-4xl text-darkPurple font-black text-center">
        Meet the PAWrents
      </p>
      <p className="text-darkPurple text-xl md:mx-32 text-center mt-4">
        Both of these dogs are very high energy and love to be outside and
        playing, but they also love to relax and cuddle with their owners. These
        dogs are great for families who are active but also love to relax once
        in a while. They will be the most loyal dog you have ever own.
      </p>
      <img className="mx-auto max-w-xs md:max-w-lg mt-8" src={LunaAndLumi} />
      <div className="flex w-full mt-12 md:flex-row flex-col items-center md:items-start">
        <div className="md:w-1/2 text-center">
          <p className="text-3xl text-darkPurple font-black">LULU</p>
          <p className="text-darkPurple px-12 mt-4 mb-6">
            Lulu is a 2 1/2 year old golden doodle with a red coat that is more
            wavy. She is between a standard and mini doodle. She is extremely
            sweet and affectionate.
          </p>
          <div className="flex md:flex-row flex-col items-center justify-center">
            <img className="mt-8 mr-2 max-h-96" src={Lulu1} />
            <img className="mt-8 ml-2 max-h-96" src={Lulu2} />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:mt-0 mt-12">
          <p className="text-3xl text-darkPurple font-black">LUMI</p>
          <p className="text-darkPurple px-12 mt-4">
            Lumi is a 2 year old standard poodle with a black coat that is more
            curly. Lumi is very affectionate and energetic. Lumi&apos;s mom was
            a black and white standard poodle while his dad was a red medium
            sized poodle.
          </p>
          <div className="flex md:flex-row flex-col items-center justify-center">
            <img className="mt-8 mr-2 max-h-96" src={Lumi1} />
            <img className="mt-8 ml-2 max-h-96" src={Lumi2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dogs
