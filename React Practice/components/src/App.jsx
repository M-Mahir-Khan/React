import './App.css'
import UseCard from './Components/UserCard'
import Img1 from './assets/image.png'
import Img2 from './assets/image2.png'
import Img3 from './assets/image.png'



function App() {

  return (
    <div className='container'>
      <UseCard name="John" desc="Desc1"  image={Img1}/>
      <UseCard name="Rohit" desc="Desc1" image={Img3}/>
      <UseCard name="James" desc="Desc1" image={Img2}/>
    </div>
  )
}

export default App
