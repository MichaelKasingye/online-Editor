import React, {useEffect, useState} from 'react';
import './App.css';
import Editor from './components/Editor';
import useLocalStorage from './hooks/useLocalStorage'
function App() {
const [html, setHtml] = useLocalStorage('html', '')
const [css, setCss] = useLocalStorage('css', '')
const [js, setJs] = useLocalStorage('js', '')
const [srcDoc, setSrcDoc] = useState('')

useEffect(() => {
 const timeout = setTimeout(() => {
   setSrcDoc( `
   <html>
   <body>${html}</body>
   <style>${css}</style>
   <script>${js}</script>
   <html/>
   `)

   return () => clearTimeout(timeout)
 }, 250);
}, [html, css, js])

  return (
    <div className="App">
    <div className=" layout pane top-pane">
      <Editor 
      language="xml"
      displayName="HTML"
      value={html}
      onChange={setHtml}
      />
       <Editor 
      language="css"
      displayName="CSS"
      value={css}
      onChange={setCss}
      />
       <Editor 
      language="javascript"
      displayName="JS"
      value={js}
      onChange={setJs}
      />

    </div>
    {/* <div classsName="pane_bottom"> */}
      
      <iframe 
      className = "iframe"
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      height="100%"
  width="100%"

      />
    {/* </div> */}
    </div>
  );
}

export default App;
