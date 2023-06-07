import './App.css';
import NavBar from './components/NavBar.js';
import Banner from './components/Banner.js'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
  <div className="App">
    <Banner />
    <NavBar />
  </div>
  );
}

export default App;
