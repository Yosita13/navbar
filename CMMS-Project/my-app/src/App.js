import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Admindashboard from './Page/admindashboard';
import Header from './initialpage/Sidebar/header';
import Sidebar from './initialpage/Sidebar/sidebar';
import Navbar from './Page/Navbar';




const App = () => {

  return (
      <Router>
          <Switch>
              <Route exact path="/Page/admindashboard" render={(props) => (<Admindashboard/>)}></Route>
             
          
              <Route path="/Page/header" render={(props) => (<Header/>)}></Route>
              <Route path="/Page/sidebar" render={(props) => (<Sidebar/>)}></Route>
              <Route path="/Page/navbar" render={(props) => (<Navbar/>)}></Route>
            
    
              <Redirect to={{pathname: '/Page/admindashboard'}}/>
          </Switch>
      </Router>

  )
}




 
 export default App
 

