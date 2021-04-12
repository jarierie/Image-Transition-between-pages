import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Route exact path='/'>
            <FirstPage />
          </Route>
          <Route exact path='/second'>
            <SecondPage />
          </Route>
        </Router>
      </Provider>
    </>
  );
}

export default App;
