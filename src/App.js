import './App.css';
import Launch from './Launch/Launch';
import React from 'react';
import Signin from './Launch/Signin';
import Signup from './Launch/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <Router>
    //   <div>
    //     <Launch/>
    //     <div>
    //       <Routes>
    //       <Route path="/" component={Signup}></Route>
    //       <Route path="/si" component={Signin}></Route>
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>

    <Launch/>

  );
}

export default App;