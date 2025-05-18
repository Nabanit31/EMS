import { useState } from 'react';

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Basically in submit handler we are preventing the 
  // default behaviour of the form which is to refresh the page
  // along with that we are logging the email and password
  // and then setting the email and password to empty string

  const SubmitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    console.log("Email is : ", email)
    console.log("Password is : ", password)

    setEmail('')
    setPassword('')

  }


  return (
    <div className="flex h-screen w-screen items-center justify-center">

      <div className="border-2 rounded-xl border-emerald-600 p-20">

        <form className="flex flex-col items-center justify-center"
          // basically in onsubmit we are calling the submit handler function
          // which we have defined above
          onSubmit={(e) => {
            SubmitHandler(e)
          }
          }>
          {/*an onchange we are calling the setemail that is the usestate function  */}
          <input value={email}
            onChange={(e) => setEmail(e.target.value)}

            required className="text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400" type="email" placeholder="Enter your email" />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}

            required className="text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-6 placeholder:text-grey-400" type="password" placeholder="Enter your password" />

          <button className="text-white border-none border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full mt-6 ">Login</button>

        </form>

      </div>


    </div>
  )
}

export default Login