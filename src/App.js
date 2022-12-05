import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route component={Home} path='/' exact />
        <Route component={NasaPhoto} path='/nasaphoto' />
      </div>
    </ Router>
  );
}

export default App;
