import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import NavBar from './components/NavBar';

//pages
import Homepage from './pages/Home/index';
import Aboutpage from './pages/About/index';
import DetailsPage from './pages/Details/index';

function App() {
  return (
    <Router>
      <NavBar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={Aboutpage} />
          <Route path='/singleshow/:id' component={DetailsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
