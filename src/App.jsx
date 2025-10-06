import { useState,useEffect } from "react";
import Card from "./Card"
import jeremy from './assets/images/image-jeremy.png'

function App() {
  const [data,setData] = useState([])
  const [timeframe, setTimeframe] = useState('weekly');
  
  useEffect(()=>{
    async function Getdata() {
      const res = await fetch('./data.json')
      const json = await res.json()
      setData(json)
    }
    Getdata()
  },[])


  return (
    <>
      <div className="main">
        <section className="intro">
          <div className="user">
            <figure className="image">
              <img src={jeremy} alt="jeremy" />
            </figure>
            <div>
              <p>Report for</p>
              <h1>Jeremy Robson</h1>
            </div>
          </div>
          <nav className="navigation">
            <li><button onClick={()=>{setTimeframe('daily')}}>Daily</button></li>
            <li><button onClick={()=>{setTimeframe('weekly')}}>Weekly</button></li>
            <li><button onClick={()=>{setTimeframe('monthly')}}>Monthly</button></li>
          </nav>
        </section>
        <section className="hero">
          {data.map((item,index)=>(
            <Card key={index} info={item} timeframe={timeframe}/>
          ))}
        </section>
      </div>
    </>
  )
}

export default App
