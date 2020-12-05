import "./App.css";
import { Router } from "@reach/router";
import TopHolder from "./Channel/wrapper";
import SubChannel from "./SubChannels/wrapper";
import store from "./redux/store";
import Login from "./login";
import { Provider } from "react-redux";
import SignUp from "./signup";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <br />
        <br />
        <br />
        <Router>
          <Login path="/login" default />
          <SignUp path="/signup" />
          <TopHolder path="/channel" />
          <SubChannel path="/subchannel/:id" />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
