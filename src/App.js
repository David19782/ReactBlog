import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
 // const title = "Welcome my new blog";
  //const likes = 50;
  //const link  = "http://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
            <Switch>
              <Route exact path = "/">
                <Home></Home>
              </Route>  
              <Route  path = "/create">
                <Create></Create>
              </Route>  
              <Route  path = "/blogs/:id">
                <BlogDetails></BlogDetails>
              </Route> 
              <Route path = "*">
                  <NotFound></NotFound>
              </Route>
            </Switch>        
        </div>
      </div>
    </Router>
  );
}

export default App;
