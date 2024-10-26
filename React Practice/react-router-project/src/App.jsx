import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import ParamComp from './Components/ParamComp';
import Cources from './Components/Cources';
import MockText from './Components/MockText';
import Reports from './Components/Reports';
import NotFound from './Components/NotFound';
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/about",
      element: <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: "/dashboard",
      element: <div>
        <Navbar />
        <Dashboard />
      </div>,
      children: [
        {
          path: 'cources',
          element: <Cources />
        }, {
          path: 'mock-test',
          element: <MockText />
        }, {
          path: 'reports',
          element: <Reports />
        }
      ]
    },
    {
      path: "/student/:id",
      element: <div>
        <Navbar />
        <ParamComp />
      </div>
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ]
)



function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
