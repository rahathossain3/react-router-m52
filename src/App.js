import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <h1>Welcome to my fancy Routing website</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path='/about' element={<About />}></Route>

        {/* this last position . when match not any link then this path work. */}
        <Route path='*' element={<NotFound />}></Route>

      </Routes>
    </div>
  );
}

export default App;
