import React from 'react';
import { useEffect } from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Style from './index.css';

const CodeEditor = () => {
  
  useEffect(() => {
    const first = document.querySelector(".editor-input");
    const iframe = document.querySelector(".editor-output");
    const btn = document.querySelector(`.${Style.btn}`);
    btn.addEventListener("click", () => {
      var html = first.textContent;
      iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
    });
    
    first.addEventListener('keyup',()=>{
      var html = first.textContent;
      iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
    })
  
    first.addEventListener("paste", function(e) {
      e.preventDefault();
      var text = e.clipboardData.getData("text/plain");
      document.execCommand("insertText", false, text);
    });
  }, []);
  

  // const onClick = () => {
  //   var html = first.textContent;
  //   iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
  // }


  return (
    <div className={`main-editor ${Style.mainEditor}`}>
      <button className={Style.btn} ><PlayCircleFilledIcon />Click to Run</button>
      <div  className={`editor-input ${Style.editorInput}`} contentEditable>{
        "<!DOCTYPE html> \
        <html> \
          <body> \
            <p>This Demo text. Feel free to change and play with it.</p>\
          </body>\
        </html>\
        "
      }</div>
      <iframe className={`editor-output ${Style.editorOutput}`} >
      </iframe>
    </div>
  );
}

export default CodeEditor;