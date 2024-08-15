import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {useState} from "react";
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light') //Wheter dark mode enabled or not;
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled","success");
      document.title  = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title  = 'TextUtils is Amazing.'
      // }, 2000);
      // setInterval(() => {
      //   document.title  = 'Install TextUtils Now.'
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      document.title  = 'TextUtils - Light Mode'
    }
      
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" home="Home"/> */}
    {/* <Navbar /> */}
   {/* <Router> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about" element={<About />} /> */}
          <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}  />
        {/* </Routes> */}
        {/* <About /> */}
      </div>
    {/* </Router> */}
  </>
  
  );
}

export default App;
