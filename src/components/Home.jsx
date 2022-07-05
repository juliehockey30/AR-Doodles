import Doodles from '../assets/LabAndGolden.jpg'

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-darkPurple font-black">
        Doodle Puppy Breeder
      </h1>
      <h3 className="text-2xl text-darkPurple font-black">Denver, CO</h3>
      <img className="max-w-[50rem] mt-8" src={Doodles} />
    </div>
  )
}

export default Home
