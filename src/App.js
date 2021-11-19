import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import AddProducts from "./Pages/AddProducts/AddProducts";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Home/Login/Login/Login";
import Register from "./Pages/Home/Login/Register/Register";
import Products from "./Pages/Products/Products/Products";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/addProducts">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
