import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';
import FriendDetail from './components/CustomLink/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/PostDetail/PostDetail';
import Posts from './components/Posts/Posts';


function App() {
  return (
    <div className="App">
      <Header></Header>

      {/* routes added ------------ */}
      <Routes>
        {/* every routes has a single route */}
        {/*---------- Route path = "path name"  element ={<component name/>}></Route>--------- */}
        <Route path="/" element={<Home />}></Route>
        <Route path='/friends' element={<Friends />}></Route>

        {/* for dynamic part--- */}
        {/* path="/flexed-part/:dynamic-part"---- */}
        <Route path="/friend/:friendId" element={<FriendDetail></FriendDetail>}></Route>

        {/* nested route ---------- */}
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
        </Route>

        <Route path='/countries' element={<Countries></Countries>}></Route>
        <Route path='/country/:countryName' element={<CountryDetail></CountryDetail>}></Route>

        <Route path='/about' element={<About />}></Route>

        {/* this last position . when match not any link then this path work. */}
        <Route path='*' element={<NotFound />}></Route>

      </Routes>
    </div>
  );
}

export default App;
