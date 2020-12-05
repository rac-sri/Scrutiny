import "./App.css";
import { Router } from "@reach/router";
import TopHolder from "./Channel/wrapper";
import SubChannel from "./SubChannels/wrapper";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <br />
        <br />
        <br />
        <Router>
          <TopHolder path="/" default />
          <SubChannel path="/subchannel/:id" />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
