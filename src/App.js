import { Route } from "react-router-dom";
import Store from "./Pages/Store";
import Home from "./Pages/Home";

import About from "./Pages/About";
import Contact from "./Pages/ContactUs";


function App() { 

  return (
    <div>
       <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/Store">
      <Store/>
      </Route>
      <Route path="/About">
      <About/>
      </Route>
      <Route path="/Contact">
      <Contact/>
      </Route>
      
     
    </div>
    
    );
}

export default App;
