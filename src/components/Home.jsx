import Doodles from '../assets/LabAndGolden.jpg'

const Home = () => {
  return (
    <div className="flex flex-col items-center pb-40 md:pb-0">
      <h1 className="text-4xl text-darkPurple font-black">
        Goldendoodle Puppies
      </h1>
      <h3 className="text-2xl text-darkPurple font-black">Aurora, CO</h3>
      <p className="text-xl text-lightPurple mt-8">
        F1b Standard Golden Doodle Puppies
      </p>
      <p className="text-xl text-lightPurple">
        75% poodle, 25% golden retriever
      </p>
      <p className="md:text-2xl text-lg p-4 text-darkPurple font-black mt-8 md:px-20 text-center">
        We are a local family that loves dogs and have owned dogs for the past
        15 years. Our first litter of golden doodle puppies was born in June of
        2021. The mom, Lulu, and the dad, Lumi, have been a part of our family
        for the past 2 1/2 years. I am the owner of Lulu and my bother is the
        owner of Lumi. They are 5 months a part in age and from different
        breeders, but have basically grown up together.
      </p>
      <p className="md:text-2xl text-lg p-4 text-darkPurple font-black md:mt-4 md:px-20 text-center">
        We are not a breeder, we are a local family from Colorado who loves
        their dogs. We absolutely loved connecting our well loved puppies from
        the last litter with wonderful families and are excited to do it again.
      </p>
      <img
        className="md:max-w-[50rem] max-w-sm md:mt-12 md:ml-0 ml-2 static"
        src={Doodles}
      />
    </div>
  )
}

export default Home
