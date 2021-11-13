import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Shared/Login/Login';
import PageNotFound from './Components/Shared/PageNotfound/PageNotFound';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import Register from './Components/Shared/Login/Register/Register';
import MobileDetails from './Components/Purchase/MobileDetails/MobileDetails';
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
import PrivateRoute from './Components/Shared/Login/PrivateRoute/PrivateRoute';
import AllMobiles from './Components/AllMobiles/AllMobiles';


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
            <Route path="/mobiles">
              <AllMobiles></AllMobiles>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/admindashboard">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <PrivateRoute path="/buymobile/:mobileId">
              <MobileDetails></MobileDetails>
            </PrivateRoute>
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
