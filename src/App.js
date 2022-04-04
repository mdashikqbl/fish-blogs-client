import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Bologs/Blogs';
import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/Header/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
