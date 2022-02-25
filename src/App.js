import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AboutUs from "./Components/About Us/AboutUs";
import Adminpanel from "./Components/AdminPanel/Adminpanel";
import Blog from "./Components/blogPage/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Kormosuchi from "./Components/Kormosuchi/Kormosuchi";
import Login from "./Components/login/Login";
import Loginsetup from "./Components/LoginSetup/Loginsetup";
import Navbar from "./Components/Navbar/Navbar";
import OurActivities from "./Components/ouractivityPage/OurActivities";
import Porichalona from "./Components/Porichalona/Porichalona";
import PostBlood from "./Components/PostBlood/PostBlood";
import PrivateRoute from "./Components/Private/PrivateRoute";
import RegisteredMember from "./Components/registeredMembers/RegisteredMember";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import Secchashebi from "./Components/secchashebi/Secchashebi";

function App() {
  return (
    <div className="App">
       <Router>
         <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home></Home> 
          </Route>
          <Route exact path="/bloodpost">
            <PostBlood></PostBlood>
          </Route>
          <Route exact path="/register">
            <RegisterPage></RegisterPage>
          </Route>
          <Route exact path="/login">
          <Login></Login>
          </Route>
         
          <Route exact path="/blog">
            <Blog></Blog>
          </Route>
          <Route exact path="/ouractivities">
          <OurActivities></OurActivities>
          </Route>
          <Route exact path="/adminasta">
         <Adminpanel></Adminpanel>
          </Route>
          <Route exact path="/comittie">
         <Porichalona></Porichalona>
          </Route>
          <Route exact path="/registeredMember">
         <RegisteredMember></RegisteredMember>
          </Route>
         
          <Route exact path="/about">
         <AboutUs></AboutUs>
          </Route>
          <Route exact path="/contact">
         <Contact></Contact>
          </Route>
          <Route exact path="/activity">
         <Kormosuchi></Kormosuchi>
          </Route>
          <Route exact path="/secchashebi">
         <Secchashebi></Secchashebi>
          </Route>
         
         
        </Switch>
    <Footer></Footer>
    </Router>
     
    </div>
  );
}

export default App;
