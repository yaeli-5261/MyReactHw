
import { RouterProvider } from 'react-router-dom';
import './App.css'
import Login from "./componnent/Login";
import { myRouter } from './Router';
function App() {

  return (
    <>
      <div className="app-container">
        <RouterProvider router={myRouter}/>
        </div>
      <Login />
    </>
  )
}

export default App
