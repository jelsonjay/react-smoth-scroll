import './App.css';
import Home from './pages/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signin from './pages/signin'
import Signup from './components/Signin/Signup'

function App() {
  return (
  <>
  <Router>
  <Switch>
  <Route path='/' component={Home} exact />
  <Route path='/signin' component={Signin} exact />
  <Route path='/signup' component={Signup} exact />
  </Switch>
  </Router>
  </>
  );
}

export default App;
