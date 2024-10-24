import { createContext, useState } from 'react'
import './App.css'
import ChildA from './Components/ChildA'

// step 1: create Context
// const UserContext = createContext()
// step 2: wrap all the child inside a provider
// step 3: pass value 
// step 4: consumer k andar jaake consume karna

const ThemeContext = createContext()

function App() {
  // const [user,setUser] = useState({name:"Mahir"})
  const [theme, setTheme] = useState("light")
  return (
    <div>

      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id='container' style={{backgroundColor:theme === 'light' ? 'beige': 'black'}}>
          <ChildA />
        </div>
      </ThemeContext.Provider>


      {/* <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider> */}
    </div>
  )
}

// export {UserContext}
export { ThemeContext }
export default App
