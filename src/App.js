import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {
  const [theme, toggleMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 900);
  }

  const changeMode = () => {
    if (theme === 'light') {
      toggleMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert(' Dark mode enabled!', 'success');


    } else {
      toggleMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert(' Light mode enabled!', 'success');

    }

  }

  return (
    <>
      <Navbar brand="TextFormater" mode={theme} changeMode={changeMode} />
      <Alert alert={alert} />
      <TextForm textBoxHeader="Upper case" buttonName="Convert" mode={theme} showAlert={showAlert}/>
    </>
  );
}

export default App;

