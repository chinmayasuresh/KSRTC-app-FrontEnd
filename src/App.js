import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Add from './components/Add';
import Delete from './components/Delete';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
   <div>
<Add/>
<Delete/>

<Search/>

<View/>
   </div>
  );
}

export default App;
