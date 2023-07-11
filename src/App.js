import './App.css';
import NavBar from './components/NavBar.js';
import AboutMe from './components/AboutMe'
import Banner from './components/Banner';
import SkillsContainer from './components/SkillsContainer';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
  <div className="App">
    <NavBar />
    <Banner />
    <AboutMe />
    <Projects />
    <SkillsContainer />
  </div>
  );
}

export default App;
