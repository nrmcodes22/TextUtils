
import React , {useState} from 'react'
export default function Example(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)

    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText)
    }
    const handleCaClick=()=>{
      
      let words=text.split(' ');
      let first=words[0];
      let newText=first.toLowerCase();

      for(let i=1;i<words.length;i++)
      {
        let s=words[i].charAt(0);
        let t=words[i].substring(1,words[i].length-1);
        let newWord=s.toUpperCase()+t.toLowerCase();
        newText+=newWord;
      }
      setText(newText)
    }
    const[text,setText]=useState('');
    return (
        
      <div>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              
              <div className="col-span-full">
                <label htmlFor="about" className={`block text-lg font-medium leading-6 text-${props.mode === 'white'?'black':'white'}`}>
                 Enter text to Analyze 
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={10}
                    className="block w-[75%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={text} onChange={handleOnChange}
                  />
                </div>
                
              </div>
            </div> 
         </div>     
  
       </div> 
       <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={handleUpClick}>Convert to UPPERCASE</button>
       <button className='bg-blue-500 text-white px-4 py-2 ml-4 rounded-md' onClick={handleLoClick}>Convert to lowercase</button>
       <button className='bg-blue-500 text-white px-4 py-2 ml-4 rounded-md' onClick={handleCaClick}>Convert to camelCase</button>
       <div className='mt-2' >
        <p className={`text-${props.mode === 'white'?'black':'white'}`}>Your Text Summary</p>
        <p className={`text-${props.mode === 'white'?'black':'white'}`}>{text.split(' ').length-1} words,{text.length} characters</p>
        <p className={`text-${props.mode === 'white'?'black':'white'}`}>{0.008*(text.split(' ').length-1)} minutes read</p>
        <h2 className={`text-${props.mode === 'white'?'black':'white'}`}>Preview</h2>
        <p className={`text-${props.mode === 'white'?'black':'white'}`}>{text.length>0?text:"Enter something to preview"}</p>
        </div>  
      </div>
    )
  }