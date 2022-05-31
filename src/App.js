import './App.css';
import Footer from './Components/Footer/Footer';

import Navbar from "./Components/Navbar/Navbar";
import Projects from './Components/Project/Projects';
import Skills from './Components/Skill/Skills';
import Intro from './intro/Intro';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main_body'>
      <Intro />
      <div style={{background:'linear-gradient(to bottom left,#000,#1b2026)'}}>
      <Skills />
      <Projects />
      <p style={{marginTop:'3rem',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <span style={{fontSize:'20px'}}>&copy; Neel Mehta</span>
        <span style={{fontSize:'12px'}}>A REACTJS WEBSITE</span>
      </p>
      </div>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
