// import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import './App.css';
// import Countdown from './countdown/countdown';
import Confirm from './Email/confirm/confirm';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
           <Route to='/counter'>
            <Countdown />
            </Route>
          <Route to='/confirm'> */}
            <Confirm />
          {/* </Route>

          </Switch>
        </Router> */}
    </div>
  );
}

export default App;
