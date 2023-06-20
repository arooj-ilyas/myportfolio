import './App.css';
import NavBar from './components/NavBar.js';
import AboutMe from './components/AboutMe'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
  <div className="App">
    <AboutMe />
    <NavBar />
  </div>
  );
}

export default App;
