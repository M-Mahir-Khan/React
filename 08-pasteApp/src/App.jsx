import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import ViewPaste from './Components/viewPaste'
import Paste from './Components/Paste'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:<div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path:"/pastes/:id",
      element:<div>
        <Navbar/>
        <ViewPaste/>
      </div>
    },
  ]
)


function App() {


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App


