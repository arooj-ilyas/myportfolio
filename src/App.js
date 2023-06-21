import './App.css';
import NavBar from './components/NavBar.js';
import AboutMe from './components/AboutMe'
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
  <div className="App">
    <NavBar />
    <Banner />
    <AboutMe />
  </div>
  );
}

export default App;
