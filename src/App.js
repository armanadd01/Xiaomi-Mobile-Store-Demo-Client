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
import Register from './Components/Shared/Login/Register/Register';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import AddOrder from './Components/Purchase/OrderMobile/AddOrder';
import MobileDetails from './Components/Purchase/MobileDetails/MobileDetails';
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
import PrivateRoute from './Components/Shared/Login/PrivateRoute/PrivateRoute';
import MyOrders from './Components/Admin/Myorders/MyOrders';
import Allorders from './Components/Admin/AllOrders/Allorders';


function App() {
  return (
    <div className="App">
      <AuthProvider>

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
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/addmobiles">
              <AddMobiles></AddMobiles>
            </Route>
            <PrivateRoute path="/addreviews">
              <AddReviews></AddReviews>
            </PrivateRoute>

            <PrivateRoute path="/admindashboard">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <Route path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </Route>

            <PrivateRoute path="/buymobile/:mobileId">
              <MobileDetails></MobileDetails>
            </PrivateRoute>
            <PrivateRoute path="/myorder/:email">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/allorders">
              <Allorders></Allorders>
            </PrivateRoute>
            {/* 
          
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
      </AuthProvider>
    </div >
  );
}

export default App;
