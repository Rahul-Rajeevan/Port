import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Curve from './components/Curve';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Project from './components/Project';
import RightSide from './components/RightSide';
import Contact from './components/Contact';
import { useEffect, useRef, useState } from 'react';
import Calender from './components/Calender';
import Anim from './components/Anim';


function App() {
  const first = useRef(null)
  const second = useRef(null)
  const third = useRef(null)
  const fourth = useRef(null)
  const zero = useRef(null)
  const [under, setUnder] = useState(29)
  const scroll1=(val)=>{
    window.scrollTo({
      top:val.current.offsetTop,
      behavior:"smooth"
    })
    setUnder(val.current.offsetTop)
  }
  const [first1, setfirst1] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      scroll1(zero)
      setfirst1(1);
      
    }, 2500);
    
  }, [])
  
  return (
   <div>
    {first1===0&&<Anim/>}
    <Navbar top={under} scroll1={scroll1} first={first} second={second} third={third} fourth={fourth} zero={zero}/>
    <Sidebar/>
    <div ref={zero}>
    <About/>
    </div>
    <Curve/>
    <div ref={first}>
    <br/><br/>
    <Intro/>
    </div>
    <br/><br/><br/><br/><br/>
    <div ref={second}>
    <Project/>
    </div>
    <div ref={third}>
    <Skills/>
    </div>
    <Calender/>
    <RightSide scroll1={scroll1} zero={zero}/>
    <div ref={fourth}>
    <Contact/>
    </div>
   </div>
  );
}

export default App;
