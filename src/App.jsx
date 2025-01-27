import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import User from './Components/User'
import Couses from './Components/Couses'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import { createBrowserRouter,RouterProvider } from "react-router-dom";



function App() {
  const router= createBrowserRouter([
    {path:"/charity",
      element: <><Navbar/><Home/><Footer/></>
    },
   
    {path:"/",
      element: <><Navbar/><Home/><Footer/></>
    },
    {
      path:"/charity/about",
      element:<> <Navbar/><About/><Footer/></>
    },
    {
      path:"/charity/Couses",
      element:<> <Navbar/><Couses/><Footer/></>
    },
    {
      path:"/charity/Contact",
      element:<> <Navbar/><Contact/><Footer/></>
    },
])
  return (
    <>
   
  < RouterProvider router={router}/>
    </>
  )
}

export default App
