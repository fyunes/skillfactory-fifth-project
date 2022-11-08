import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    

const auth = getAuth();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email,"Email", password, "Password")
        newUser()

    }

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [firebaseError, setFirebaseError] = useState(false)
// const [user, setUser] = useState(null)


const newUser = () => { createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user,"user");
    // ...
  })
  .catch((error) => {
    setFirebaseError(true)
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode, errorMessage);
    // ..
  }); }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
        <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
        <button>Registrarte</button>
    </form>
    {firebaseError && <div>Usuario repetido</div>}
    </>
  )
}

export default Register
