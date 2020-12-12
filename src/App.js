import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";

// components
import Modal from './views/ModalManager';

// styles
import './App.css';
import Users from "./views/Users/Users";
import Tasks from "./views/Tasks/Tasks";

function App() {
  return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/tasks/:id" exact>
               <Tasks />
            </Route>
            <Route path="/">
                <Users />
            </Route>
            <Redirect
              to="/"
            />
          </Switch>
        </Router>
        <Modal />
      </div>
  );
}

export default App;
