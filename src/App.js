import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Error from './components/Error';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText] = useState('Enable Dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleBtn = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setToggleText("Enable Dark");
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils-Home|Light-Mode";
      // setInterval(() => {
      //   document.title="TextUtils-Home";
      // }, 1000);
      // setInterval(() => {
      //   document.title="Use TextUtils to Manipulate Text";
      // }, 500);

    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#4A403E';
      setToggleText("Enable Light");
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils-Home|Dark-Mode";
    }
  }
  return (
    <BrowserRouter>
      <Navbar title="TextUtils" about="About" mode={mode} toggle={toggleBtn} toggleText={toggleText} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/" element={<TextForm header="Please Input Text To Analyze! " mode={mode} showAlert={showAlert} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
