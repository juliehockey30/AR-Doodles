const Question = ({ text }) => {
  return <p className="text-2xl text-darkPurple font-black">{text}</p>
}

const Answer = ({ text }) => {
  return <p className="text-lg text-lightPurple font-black mb-4">{text}</p>
}

const FAQ = () => {
  return (
    <div className="md:pb-16 pb-48">
      <p className="text-4xl text-darkPurple font-black text-center">
        Questions?
      </p>
      <p className="text-2xl text-darkPurple font-black text-center">
        We have answers!
      </p>
      <div className="px-12 mt-12">
        <Question text="What's a doodle?" />
        <Answer text='A "doodle" often refers to a breed that is a cross between a poodle and another breed. Lulu, the pups mom, is a "Goldendoodle" because her mom was a Golden Retriever and her Dad was a poodle.' />
        <Question text="Are your dogs hypoallergenic?" />
        <Answer text="Yes! Because of the poodle bloodline in them, they are considered hypoallergenic. Since their dad Lumi is a pure bread standard poodle and their mom Lulu also is 50% poodle, the pups are even more hypoallergenic than most doodles." />
        <Question text="How much does a puppy cost?" />
        <Answer text="The puppies cost $1000 and to reserve ahead of time, you must put down a $500 deposit. The deposit is only refundable if there are not enough puppies in the litter for everyone with a reservation. Puppies are adopted on a first come first serve basis. Unfortunately we cannot refund your deposit if there are still puppies available but the specific color or gender you would like is not." />
        <Question text="How do I pay?" />
        <Answer text="We accept Venmo, Zelle, and PayPal." />
        <Question text="When can I pick up my puppy?" />
        <Answer text="The puppies will be ready to be picked up once they are 8 weeks old and after they have received their first set of shots." />
      </div>
    </div>
  )
}

export default FAQ
