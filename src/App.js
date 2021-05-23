import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';
import EmailEditor from 'react-email-editor';


function App() {
  const emailEditorRef = useRef(null);

  const saveDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
      console.log('saveDesign', design);
      alert('Design JSON has been logged in your developer console.');
    });
  };

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
      alert('Output HTML has been logged in your developer console.');
    });
  };

  return (
    <div className="App">
      <div>
      <h1>React Email Editor</h1>
      <EmailEditor ref={emailEditorRef} />
      <button onClick={saveDesign}>Save Design</button>
      <button onClick={exportHtml}>Export HTML</button>
      </div>
    </div>
  );
}
export default App;
