import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Store from "./Pages/Store";
import Home from "./Pages/Home";
import RootLayout from "./Pages/Root";
import About from "./Pages/About";

const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {path:'/Store',element:<Store/>},
      {path:'/About',element:<About/>},
      {path:'/',element:<Home/>},
    ],
  },  
])

function App() { 

  return (
    <RouterProvider router={router} />
    );
}

export default App;
