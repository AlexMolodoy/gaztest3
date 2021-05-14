import "./App.css";
import {
  Switch,
  Route,
} from "react-router-dom";
import StartCalendar from "./components/Calendar";
import PrivatCard from "./components/Card";
import store from "./store/store"


const App = () => {
  return (
    <Switch>
      <Route path="/:id">
        <PrivatCard data={store.listData} />
      </Route>
      <Route path="/">
        <StartCalendar />
      </Route>
    </Switch>
  );
}

export default App;
