import './App.css';
import NavBar from './components/NavBar.js';
import AboutMe from './components/AboutMe'
import HomePage from './components/HomePage';
import Skills from './components/Skills'
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
  <div className="App">
    <NavBar />
    <HomePage />
    <AboutMe />
    <Projects />
    <Skills />
  </div>
  );
}

export default App;
