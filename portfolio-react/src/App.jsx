
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Me from "./Components/Me/Me";
import About from "./Components/About/About";
import { Route,Routes } from 'react-router';
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App=()=>{
  return(
    <div>
      <Navbar/>
       <Me/>
       <About/>
       <Project/>
       <Contact/>
       <Footer/>
       <Routes>
       {/* <Route path='/Home'Component={}></Route> */}
       

       </Routes>
    </div>
  )
}
export  default App;






// import React from "react";
// import Navbar from "./Components/Navbar/Navbar";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faUser } from '@fortawesome/free-solid-svg-icons'
// import './App.css';
// import Me from "./Components/Me/Me";
// import About from "./Components/About/About";
// // import { Route,Routes } from 'react-router';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Project from "./Components/Projects/Project";
// import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";
// import ProfileCard from './Components/ProfileCard/ProfileCard'; 

// const App=()=>{
//   return(
    
       
//        <Router>
//       <div>
//         <Navbar />
//         <Me/>
//        <About/>
//        <Project/>
//        <Contact/>
//        <Footer/>
//         <Switch>
//           <Route path="/profileCard" component={ProfileCard} />
//         </Switch>
//       </div>
//     </Router>
//   )
// }
// export  default App;