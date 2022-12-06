import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.css';

function App() {
  return (
    <Routes className='app'>
      <Route element={<Home />} path="/" exact />
      <Route element={<NasaPhoto />} path='/nasaphoto' />
    </Routes>
  );
}

export default App;
