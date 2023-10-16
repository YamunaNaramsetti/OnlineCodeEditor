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
    outputs.contentDocument.body.innerHTML = htmls+'<style>'+css+'</style>';
    outputs.contentWindow.eval(javascript)
  }
  return (
    <>
    <Header />
    <div className="container">
      <div className='left'>
      <label>HTML</label>
      <textarea name='html' onChange={(e)=>{setHtml(e.target.value)}} />

      <label>CSS</label>
      <textarea name='css'onChange={(e)=>{setCss(e.target.value)}} />

      <label>Javascript</label>
      <textarea name='js' onChange={(e)=>{setJavascript(e.target.value)}} />
      </div>
      <div className='right'>
        <button onClick={handleClick}>Run</button>
        <iframe id='output'></iframe>
      </div>

    </div>
    </>
  );
}

export default App;