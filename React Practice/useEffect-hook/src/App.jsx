
import { useEffect, useState } from 'react'
import LoggerComponent from './Components/LoggerComponent'
import TimerComponent from './Components/TimerComponent'
import DataFetcher from './Components/DataFetcher'
import ResizeComponent from './Components/ResizeComponent'
import MultieffectComponent from './Components/MultieffectComponent'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [total, setTotal] = useState(1)

  // useEffect
  // first --> side-effect function
  // second --> clean-up function
  // third --> comma seprated dep list


  // Variation: 1
  // runs on every render
  // useEffect(()=>{
  //   alert("I will rn on each render")
  // },)

  // Variation 2
  // that runs on only first render
  // useEffect(()=>{
  //   alert("I will run on only first render")
  // },[])

  // Variation 3 
  // useEffect(()=>{
  //   alert("I will run every time when count is updated")
  // },[count])

  // Variation 4
  // multiple dependencies
  // useEffect(()=>{
  //   alert("I will run every time when count/total is updated")
  // },[count,total])

  // Variation 5
  // This time add cleanup function
  // useEffect(() => {
  //   alert("count is updated")

  //   return () => {
  //     alert("count is unmounted from UI")
  //   }
  // }, [count])


  // function handleClick() {
  //   setCount(count + 1)
  // }

  // function handleClickTotal(){
  //   setTotal(total + 1)

  // }

  return (
    <div>
      {/* <button onClick={handleClick}>Update Count</button>
      <br />
      Count is : {count}

      <br />
      <button onClick={handleClickTotal}>Update Total</button>
      <br />
      Total is : {total} */}

      {/* <LoggerComponent/> */}
      {/* <TimerComponent/>    */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent/> */}
      <MultieffectComponent/>
    </div>

  )
}

export default App
