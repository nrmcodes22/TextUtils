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
    setMode('black');

  }
  else{
    setMode('white');
  }
}
  return (
    <div>
      <Navbar title="TextUtils" className={`bg-${mode}`}mode={mode} toggleMode={toggleMode}/>
      {/*<About/>*/}
      <div className="ml-4 mt-8  p-4">
      {/*<Textform/>*/}
      </div>
    </div>
  )
}