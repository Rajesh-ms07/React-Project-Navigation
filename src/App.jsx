
import React from "react";
import './App.css';
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";

const router=createBrowserRouter([

{path:"/",element:<Home/>},
{path:"/About",element:<About/>},
{path:"/Contact",element:<Contact/>},
{path:"/Product",element:<Product/>},


])
function App(){
    return(
        <RouterProvider router={router}/>
    );
}
export default App;