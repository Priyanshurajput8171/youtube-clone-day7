import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Video from './Video';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="App">
      {/* <h3> REACT APP</h3>
      <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/v' element={<Video/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
