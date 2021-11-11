import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Shared/Login/Login';
import PageNotFound from './Components/Shared/PageNotfound/PageNotFound';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import AddMobiles from './Components/Admin/AddMobiles/AddMobiles';
import AddReviews from './Components/Admin/AddReviews/AddReviews';


function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}

      {/* set route */}
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addmobiles">
            <AddMobiles></AddMobiles>
          </Route>
          <Route path="/addreviews">
            <AddReviews></AddReviews>
          </Route>
          {/* <Route path="/myorder/:email">
            <MyOrders></MyOrders>
          </Route>
          <PrivateRoute path="/allorders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/allusers">
            <AllUsers></AllUsers>
          </PrivateRoute>
          <PrivateRoute path="/adduser">
            <AddUser></AddUser>
          </PrivateRoute>
          <PrivateRoute path="/addorder/:plansId">
            <AddOrders></AddOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/admindashboard">
            <AdminDashboard></AdminDashboard>
          </PrivateRoute> */}

          <Route exact path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      {/* </AuthProvider>s */}
    </div>
  );
}

export default App;
