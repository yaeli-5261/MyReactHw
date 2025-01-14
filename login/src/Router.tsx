import { createBrowserRouter } from "react-router-dom";
import Applayout from "./componnent/Applayout";
// import { Children } from "react";
import Person from "./componnent/Person";
import UserPage from "./componnent/UserPage";
import NavBar from "./componnent/NavBar";
export const myRouter = createBrowserRouter([
    {
    
        path:'/',
        element:<Applayout/>,
        errorElement:<>main error</>,
        children:[
            {
                path:'/',element:<NavBar/>
            },
            {
                path : 'yaeli',element:<>my name is: yaeli</>
            },
            {
                path:'person/:yaei',element:<Person/>
            },
            {
                path:'userPage',element:<UserPage/>
            }
        ]
       
    }
])
export default myRouter