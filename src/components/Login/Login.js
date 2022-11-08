import React, { useContext, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserData } from '../../context/userData';

const Login = () => {
    

const auth = getAuth();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email,"Email", password, "Password")
        logInUser()

    }

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [firebaseError, setFirebaseError] = useState(false)
const {setUserLog, userLog } = useContext(UserData)
// const [user, setUser] = useState(null)


const logInUser = () => { signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user,"user");
    console.log(userLog)
    setUserLog((prevState)=> prevState = !prevState);
    console.log(userLog)
    // ...
  })
  .catch((error) => {
    setFirebaseError(true)
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode, "errorCode");
    console.log(errorMessage, "errorMessage");
    // ..
  }); }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
        <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
        <button>Log In</button>
    </form>
    {firebaseError && <div>Vemos que devuelve</div>}
    </>
  )
}

export default Login
