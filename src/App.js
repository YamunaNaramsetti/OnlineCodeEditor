import React,{useState} from 'react'
import './App.css';
import Header from './Header';

function App() {
  const [htmls,setHtml] = useState('')
  const [css,setCss] = useState('')
  const [javascript,setJavascript] = useState('')
  const handleClick = e=>
  {
    const outputs=document.getElementById("output");
    outputs.classList.add("output")
    outputs.contentDocument.body.innerHTML = htmls+'<style>'+css+'</style>';
    outputs.contentWindow.eval(javascript)
  }
  return (
    <>
    <Header />
    <div className="container">
      <div className='left'>
        <label className="html">HTML</label>
        <textarea name='html' className="html-color" onChange={(e)=>{setHtml(e.target.value)}} />
        <label className='css'>CSS</label>
        <textarea name='css'onChange={(e)=>{setCss(e.target.value)}} />

      <label className='js'>Javascript</label>
      <textarea name='js' onChange={(e)=>{setJavascript(e.target.value)}} />
      </div>
      <div className='right'>
        <button onClick={handleClick} className='button'>Run</button>
        <div className='cont'>
        
        <iframe id='output' className='output'></iframe>
        </div>
      </div>

    </div>
    </>
  );
}

export default App;