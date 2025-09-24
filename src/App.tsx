import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/Home"
import Index from "./pages/Index"
import About from "./pages/About"
import Book from "./pages/BookArtist"
import Contact from "./pages/Contact"
import ErrorPage from "./pages/ErrorPage"

const App = () => {
  const router =  createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {
          index: true,
          element: <Index/>
        },
        {
          path:"/about",
          element: <About/>
        },
        {
          path :"/contactUs",
          element: <Contact/>
        },
        {
          path: "/bookArtist",
          element: <Book/>
        }
      ]
    },
    {
      path:"*",
      element:<ErrorPage/>
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App