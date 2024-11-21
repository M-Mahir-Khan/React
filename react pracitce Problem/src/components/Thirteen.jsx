import React, { useState } from 'react'

const Thirteen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [isRegistered, setIsRegisterd] = useState(false)
  const [isLoggedIn,  setLoggedIn] = useState(false)
  const [users,setUsers] = useState([])

  function handleAuthentication() {
    if (isRegistered) {
      // Login
      if(isRegistered){
        const user = users.find((u)=> u.email === email && u.password === password);
        if(user){
          setLoggedIn(true)
        }else{
          alert("Login faild, Please Check your credential")
        }
      }
    } else {
      // Register
      const newUser = {email,password}
      setUsers([...users,newUser])
      localStorage.setItem("users",JSON.stringify([...users,newUser]))
      setLoggedIn(true)
    }
  }

  function handleLogout(){
    setLoggedIn(false)
    setEmail("")
    setPassword("")
  }
  return (
    <div>
      {
        isLoggedIn ? (
          <div>
            <h2>
              Welcome, {email}
            </h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>{isRegistered ? "Login" : "Register"}</h2>
            <form>
              <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
              <button onClick={handleAuthentication}>
                {isRegistered ? "Login" : "Register"}
              </button>
            </form>
            <p>
              {isRegistered ? "Don't have an account" : "Already have an account ? Log in"}
            </p>
            <button onClick={() => setIsRegisterd(!isRegistered)}>
              {isRegistered ? "Register" : "Login"}
            </button>
          </div>
        )
      }

    </div>
  )
}

export default Thirteen