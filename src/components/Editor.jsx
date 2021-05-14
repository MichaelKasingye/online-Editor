import React, { useState } from 'react'
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor } from 'react-codemirror2'

function Editor({ displayName, language, value, onChange }) {

const [open, setOpen] = useState(true);

    function handleChange(editor,data,value){
        onChange(value)
    }

    return (
        <div className={`editor-container ${open ? '': 'collapsed'}`}>
          <div className="editor-title">
              {displayName}
              <button 
              onClick={() => setOpen(prevOpen => !prevOpen)}>o/c</button>
              </div>  
              <ControlledEditor
              onBeforeChange={handleChange}
              value={value}
              className="code-mirror-wrapper"
              options={{
                  lineWrapping: true,
                  lint: true,
                  mode: language,
                  theme:'material',
                  lineNumbers: true,
                  autoCloseBrackets: true,
                  autoCloseTags: true,
                  foldGutter: true,
                  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                  extraKeys: {
                    'Ctrl-Space': 'autocomplete'
                  }
              }}
              />
        </div>
    )
}

export default Editor
