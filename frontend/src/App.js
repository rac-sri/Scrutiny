import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'
import TopHolder from './Channel/wrapper'
import SubChannel from './SubChannels/wrapper'

function App() {
  return (
    <div className="App">
      <br/><br/><br/>
      <Router>
      <TopHolder path="/" default/>
      <SubChannel path="/subchannel" />
      </Router>
    </div>
  );
}

export default App;
