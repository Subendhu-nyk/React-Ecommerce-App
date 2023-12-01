import { Route,Switch} from "react-router-dom";
import Store from "./Pages/Store";
import Home from "./Pages/Home";

import About from "./Pages/About";
import Contact from "./Pages/ContactUs";
import ProductDetail from "./Pages/ProductDetail";


function App() { 

  return (
    <div>
      <Switch>
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
      <Route path='/products/:productId'>
      <ProductDetail/>
      </Route>     
      </Switch>
    </div>
    
    );
}

export default App;
