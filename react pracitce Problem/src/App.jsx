import './App.css'
import Four from './components/Four'
import One from './components/One'
import Three from './components/Three'
import Two from './components/Two'
import Five from './components/Five'
import Six from './components/Six'
import Seven from './components/Seven'
import Eight from './components/Eight'
import Ten from './components/Ten'
import Nine from './components/Nine'
import Eleven from './components/Eleven'
import Twelve from './components/Twelve'
import Thirteen from './components/Thirteen'
import Fourteen from './components/Fourteen'
import Fifteen from './components/Fifteen'
import Sixteen from './components/Sixteen'
import Seventeen from './components/Seventeen'
import { Eighteen } from './components/Eighteen'
import Nineteen from './components/Nineteen'
import NineteethComp from './components/NineteethComp'
import { ThemeProvider } from './components/ThemeContext'
import Twinty from './components/Twinty'
import { CartProvider } from './components/CartContext'

function App() {

  // this is for file Fifteen and Sixteen
  const items = ["item1", "item2", "item3", "another Item", "expensive item"]


  return (
    <>
      {/* Build a simple Hello World component */}
      {/* <One /> */}


      {/* Build  a counter application with a increment and decrement buttons*/}
      {/* <Two/> */}


      {/* Creates a form that take user input and displayes it in real life */}
      {/* <Three/> */}


      {/* Build a list component to display a list of item */}
      {/* <Four/>   */}


      {/* Implement a basic toggle switch component */}
      {/* <Five/> */}


      {/* Create a Component that fetches data from an API and display it */}
      {/* <Six/> */}



      {/* Build a timer that counts down from a specified time. */}
      {/* <Seven/> */}


      {/* Implement a simple to-do list application with add and remove functionality */}
      {/* <Eight /> */}


      {/* Create a basic routing setup with a react router */}
      {/* <Nine/> */}


      {/* Create a component that changes its backgroud coulor when clicked */}
      {/* <Ten/> */}


      {/* Create a component that displya a random quote each time it is rendered */}
      {/* <Eleven/> */}


      {/* Build a file uploader component that allows users to upload images */}
      {/* <Twelve /> */}


      {/* Implement a basic authentication form with login and registration. */}
      {/* <Thirteen /> */}


      {/* Develop a weather app that fetches and displays weather information based on user's location */}
      {/* <Fourteen/> */}

      {/* Build a search  bar that filters a list of items based on user input . */}
      {/* <Fifteen items={items} /> */}


      {/* Develop a pagination component to navigate through a large list of items */}
      {/* <Sixteen items={items} itemsPerPage={2}/> */}


      {/* Build a color Picker that allows users to select a color. */}
      {/* <Seventeen/> */}


      {/* Implement a responsive navigation menu with a hamburger icon. */}
      {/* <Eighteen/> */}


      {/* Build a context provider that allowws users to switch between light and dark themes , and use the context in different parts of the app to apply the seclected theme. */}
      {/* <ThemeProvider>
        <div className='App'>
          <Nineteen />
          <NineteethComp />
        </div>
      </ThemeProvider> */}


      {/* Implement a shopping cart using context and a reducer, with features like adding , removing , and updating items in the cart. */}
      <CartProvider>
      <Twinty/>
      </CartProvider>
    </>
  )
}


export default App
