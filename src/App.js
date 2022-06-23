import './App.css';
import Footer from './Components/Footer/Footer';

import Navbar from "./Components/Navbar/Navbar";
import Projects from './Components/Project/Projects';
import Skills from './Components/Skill/Skills';
import Intro from './intro/Intro';
import border from './image/cartoons.gif'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main_body'>
      <Intro />
      <div className='design'><img src={border} alt="" /></div>
      {/* <div className="main_container"> */}
        <Skills />
        <div className='design' style={{transform:'scale(-1)'}}><img src={border} alt="" /></div>
        <Projects />
        <p style={{marginTop:'3rem',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontSize:'20px'}}>&copy; Neel Mehta</span>
          <span style={{fontSize:'12px'}}>A REACTJS WEBSITE</span>
        </p>
      </div>
      {/* </div> */}
      <Footer />
      
    </div>
  );
}

export default App;
