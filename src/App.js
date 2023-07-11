import './App.css';
import NavBar from './components/NavBar.js';
import AboutMe from './components/AboutMe'
import Banner from './components/Banner';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
  <div className="App">
    <NavBar />
    <Banner />
    <AboutMe />
    <Skills />
  </div>
  );
}

export default App;
