import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'

const InputField = ({ label, name, setShowError, setter }) => {
  const handleOnChange = (inputText) => {
    setShowError(false)
    setter(inputText)
  }

  return (
    <div className="group relative md:w-80 w-60">
      <input
        className="mb-12 md:mb-0 peer w-full border-t-0 border-x-0 border-b border-b-lightPurple bg-transparent pt-0 pl-0 pb-1 text-base outline-none focus-within:border-darkPurple focus:ring-0"
        name={name}
        onChange={(e) => handleOnChange(e.currentTarget.value)}
        required
      />
      <label
        className="text-base absolute top-0 left-0 flex transform items-center text-darkPurple transition-all duration-300 group-focus-within:h-1/2 group-focus-within:-translate-y-full group-focus-within:pl-0 group-focus-within:text-xs peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  )
}

const Contact = () => {
  const [showForm, setShowForm] = useState(true)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [formValid, setFormValid] = useState(false)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    if (
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      phoneNumber !== '' &&
      message !== ''
    ) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  }, [firstName, lastName, email, phoneNumber, message])

  const handleSetMessage = (message) => {
    setShowError(false)
    setMessage(message)
  }

  const sendMessage = () => {
    if (!formValid) {
      setShowError(true)
      return
    }

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      from_phone: phoneNumber,
      message: message,
    }

    emailjs
      .send(
        'service_sjyuadq',
        'template_99zrv2n',
        templateParams,
        'FajNiSDziyV_tPKj6'
      )
      .then(
        () => {
          setShowForm(false)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="md:pb-16 pb-48">
      <p className="text-4xl text-darkPurple font-black text-center">
        Contact Us
      </p>
      <p className="text-2xl text-darkPurple font-black text-center px-4">
        To inquire about adopting a puppy or for general questions, please fill
        out the form below.
      </p>
      <div className="border-2 border-lightPurple max-w-4xl mt-12 md:p-12 p-8 flex flex-col md:mx-auto mx-4">
        {showForm ? (
          <>
            <div className="flex md:mb-10 justify-around flex-col md:flex-row">
              <InputField
                label="First Name"
                setShowError={setShowError}
                setter={setFirstName}
              />
              <InputField
                label="Last Name"
                setShowError={setShowError}
                setter={setLastName}
              />
            </div>
            <div className="flex justify-around flex-col md:flex-row">
              <InputField
                label="Email"
                setShowError={setShowError}
                setter={setEmail}
              />
              <InputField
                label="Phone Number"
                setShowError={setShowError}
                setter={setPhoneNumber}
              />
            </div>
            <textarea
              className="md:mx-8 mx-0 mb-10 mt-4 md:my-10 md:w-11/12 w-full rounded border border-lightPurple bg-white p-3 text-sm outline-0 placeholder:italic focus:border-darkPurple"
              cols={2}
              onChange={(e) => handleSetMessage(e.currentTarget.value)}
              placeholder="Add a message"
              rows={10}
              value={message}
            />
            {showError ? (
              <p className="text-warningRed font-black text-center mb-4">
                Please fill out the entire form before sending
              </p>
            ) : null}
            <button
              className="mx-auto bg-lightPurple hover:bg-darkPurple text-white text-xl font-extrabold py-4 px-6 rounded-md"
              onClick={sendMessage}
            >
              SEND MESSAGE
            </button>
          </>
        ) : (
          <>
            <p className="text-darkPurple text-2xl font-bold text-center">
              Message sent!
            </p>
            <p className="text-lightPurple text-lg text-center">
              We will get back to you as quickly as we can.
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default Contact
