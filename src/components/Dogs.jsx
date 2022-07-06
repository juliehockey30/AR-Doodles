import Lulu1 from '../assets/Lulu1.jpg'
import Lulu2 from '../assets/Lulu2.jpg'

const Dogs = () => {
  return (
    <div className="md:pb-16 pb-32">
      <p className="text-4xl text-darkPurple font-black text-center">
        Meet the PAWrents
      </p>
      <div className="flex w-full mt-12 md:flex-row flex-col items-center md:items-start">
        <div className="w-1/2 text-center">
          <p className="text-xl text-lightPurple font-black">
            Mom - Goldendoodle
          </p>
          <p className="text-3xl text-darkPurple font-black">LULU</p>
          <div className="flex md:flex-row flex-col items-center justify-center">
            <img className="mt-8 mr-2 max-h-96" src={Lulu1} />
            <img className="mt-8 ml-2 max-h-96" src={Lulu2} />
          </div>
        </div>
        <div className="w-1/2 text-center md:mt-0 mt-12">
          <p className="text-xl text-lightPurple font-black">
            Dad - Labradoodle
          </p>
          <p className="text-3xl text-darkPurple font-black">LUMI</p>
        </div>
      </div>
    </div>
  )
}

export default Dogs
