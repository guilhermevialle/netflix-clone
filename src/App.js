import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createContext, useReducer } from "react";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import TopBar from "./components/TopBar";

export const Data = createContext();

const App = () => {
  const Reduce = (state, action) => {
    switch (action.type) {
      case "change-inp":
        return {
          ...state,
          inpval: action.value,
        };
      case "change-movieID":
        return {
          ...state,
          movieID: action.value,
        };
      case "search-movies":
        return {
          ...state,
          movies: action.value,
        };
      case "change-currentPosition":
        return {
          ...state,
          currentPos: action.value,
        };
      default:
        return state;
    }
  };

  const ReduceInitalValue = {
    inpval: "",
    movies: [],
    movieID: 0,
    currentPos: [],
  };

  const [global, setGlobal] = useReducer(Reduce, ReduceInitalValue);

  return (
    <Router>
      <Data.Provider value={{ global, setGlobal }}>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
      </Data.Provider>
    </Router>
  );
};

export default App;
