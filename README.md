# Getting Started with React Router

## React Router
### create react app
    npx create-react-app router-tutorial

### cd router-tutorial (create) 
    npm install react-router-dom@6

## Video 2
###    52-2 Create Simple Route and simple router setup

### ( google react.strictMode or react strictMood )


##   Router setup

### file name
        index.js    => 

### code:       
        import { BrowserRouter } from 'react-router-dom';
        
        
        ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
        );

### App.js  file

    import { Route, Routes } from 'react-router-dom';
    import './App.css';
    import Friends from './components/Friends/Friends';
    import Home from './components/Home/Home';
<!-- ---------------------------- -->

    <div className="App">
      <h1>Welcome to my fancy Routing website</h1>
      
<!-- every routes has a single route -->

      <Routes>
<!-------------- Route path = "path name"  element ={<component name/>}></Route> ------>
        <Route path="/" element={<Home />}></Route>
        <Route path='/friends' element={<Friends />}></Route>


<!-- -----this last position . when match not any link then this path work.  -->
        <Route path='*' element={NotFound}></Route>
      </Routes>
    </div>
 
## Video 3
### 52-3 Load Users, display users, dynamic link, use Navigate

## dynamic Route 

###  useNavigate() function
    let navigate = useNavigate();
 
### use Even Handler 
        const showFriendDetail = () => {
            const path = `/friend/${id}`
            navigate(path);
        }

## link between function and button 
<button onClick={showFriendDetail}>{username} id: {id}</button>




Video 6

##  Route dynamic part

<!--    path="/flexed-part/:dynamic-part" -->

   <Route path="/friend/:friendId" element={<FriendDetail></FriendDetail>}></Route>

## 2 way a link dynamic 

1.
   <Link to={'/friend/' + value}>Show detail</Link>;

2.
   <Link to={`/friend/${value}`}>Show detail</Link>;

### ........ params
  
   const params = useParams();
   const { friendId } = useParams();

### return code 
   <h2>This is Detail about Dosto: {friendId} </h2>

