import { useState } from 'react'
import Navbar from './components/Navbar';
import Textfield from './components/Textfield';
import Alert from './components/Alert';
import About from './components/About';
import './App.css';
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type, bg) => {
    setAlert({
      msg: message,
      type: type,
      bg: bg
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  // function toggleDarkMode() {
  //   if (mode === "light") {
  //     setMode("dark")
  //     showAlert("Dark Mode has been enabled", "success", "dark")
  //   }
  //   else if (mode === "dark") {
  //     setMode("light")
  //     showAlert("Light Mode has been enabled", "success", "dark")
  //   }
  // }

  function toggleDarkMode(bgColor) {
    if (mode !== "dark" && bgColor === null) {
      setMode("dark");
  }
  else if (mode !== "dark" && bgColor !== null) {
    setMode(bgColor);
  }
  else if (mode !== "light" && bgColor === null) {
    setMode("light");
  }
  else if (mode !== "light" && bgColor !== null) {
    setMode(bgColor);
  }
}

const txtareaColor = () => {
  if (mode === "info") {
      return "rgba(0, 255, 255, 0.5)";
  }
  else if (mode === "primary") {
      return "rgba(0, 68, 255, 0.5)";
  }
  else if (mode === "danger") {
      return "rgba(255, 0, 0, 0.5)";
  }
  else if (mode === "success") {
      return "rgba(0, 255, 76, 0.5)";
  }
  else if (mode === "warning") {
      return "rgba(255, 255, 0, 0.5)";
  }
  else if (mode === "light") {
      return "rgba(255, 255, 255, .5";
  }
  else if (mode === "dark") {
      return "rgba(0, 0, 0, .5";
  }
}

const txtfieldColor = () => {
  if (mode === "info") {
      return "#212529";
  }
  else if (mode === "primary") {
      return "#fff";
  }
  else if (mode === "danger") {
      return "#fff";
  }
  else if (mode === "success") {
      return "#fff";
  }
  else if (mode === "warning") {
      return "#212529";
  }
  else if (mode === "light") {
      return "#212529";
  }
  else if (mode === "dark") {
      return "#fff";
  }
}

  return (
    <BrowserRouter>
      <div className='body-div' >
          <Navbar title="Text Utilities" navigation1="Home" navigation2="About" mode={mode} toggleMode={toggleDarkMode} txtareaColor={txtareaColor} txtfieldColor={txtfieldColor}  />
          <Alert alert={alert} mode={mode} />
        <Routes>
          <Route exact path="/about" element={<About title="About Us" mode={mode} txtareaColor={txtareaColor} txtfieldColor={txtfieldColor} />}> </Route>
          <Route exact path="/" element={<Textfield heading="Enter Text here to analyse :" mode={mode} txtareaColor={txtareaColor} txtfieldColor={txtfieldColor} alert={showAlert} />}> </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
