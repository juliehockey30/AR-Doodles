import Doodles from '../assets/LabAndGolden.jpg'

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-darkPurple font-black">
        Doodle Puppy Breeder
      </h1>
      <h3 className="text-2xl text-darkPurple font-black">Aurora, CO</h3>
      <img
        className="md:max-w-[50rem] max-w-sm md:mt-8 mt-36 md:ml-0 ml-2"
        src={Doodles}
      />
    </div>
  )
}

export default Home
