"use client"
import React ,{useState} from 'react'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'

export default function page() {
  const [mode,setMode]=useState('white');
  const toggleMode=()=>{
  if(mode==='white')
  {
    document.body.style.backgroundColor='#131773';
    setMode('black');


  }
  else{
    document.body.style.backgroundColor='gray';
    setMode('white');

  }
}
  return (
    <div>
      <Navbar className={`bg-${mode}`} title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      {/*<About/>*/}
      <div className="ml-4 mt-8  p-4">
      <Textform mode={mode}/>
      </div>
    </div>
  )
}