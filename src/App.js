import logo from './logo.svg';
import './App.css';
import Test from './Test';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Akash ahmed
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     <Router>
      <Link to="/test">Link</Link>
      <Routes>
        <Route path='/test' element={<Test/>}/>
      </Routes>
     </Router>
         
      </header>
    </div>
  );
}

export default App;
