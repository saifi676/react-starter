import './App.css';
import WorksDetail from './pages/WorksDetail';
import Works from './pages/Works';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/Blog'  element={<Blog/>}/>
        <Route path='/Works'  element={<Works/>}/>
        <Route path='/WorksDetail'  element={<WorksDetail/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
