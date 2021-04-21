import React from "react"
import './App.css';
import About from "./Components/About";
import MyAppBar from "./Components/NavBar"
import Skills from "./Components/Skills";
import Particles from 'react-particles-js'
import styles from "./Components/app.module.css"
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";


function App() {
  return (
    <>
    <div className={styles.wrapperall}>
      <MyAppBar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
     </div>
    </>
  );
}

export default App;
