import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import UserList from "./components/UserList";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
  return (
    <div className="app ui container">
      <Router>
        <Route path="*">
          <NavBar></NavBar>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route exact path="/users">
          <UserListPage></UserListPage>
        </Route>
        <Route exact path="/users/:id">
          <UserDetailPage/>
        </Route>
        {/* <Route path="/">
            <NotFound></NotFound>
          </Route> */}
      </Router>
    </div>
  );
}

export default App;
