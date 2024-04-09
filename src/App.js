import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './components/Add';
import Delete from './components/Delete';
import Search from './components/Search';
import View from './components/View';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main/>}   />
          <Route path="/add" element={<Add />} />
          <Route path="/search" element={<Search />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/view" element={<View />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
