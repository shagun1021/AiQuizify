import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Index'
import './index.css'
import Login from './Login'
import Signup from './Signup'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Dashboard2 from './Dashboard2'
import Question from './Question'
import Quiz from './Quiz'
import Profile from './Profile'


const router=createBrowserRouter(
  [
    {
      path :"/",
      element :<Index/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/Signup",
      element:<Signup/>
    },
    {
      path:"/Dashboard",
      element:<Dashboard2/>
    },
    {
      path:"Dashboard/Question",
      element:<Question/>
    },
    {
      path:"Dashboard/Quiz",
      element:<Quiz/>
    },
    {
      path:"Dashboard/Profile",
      element:<Profile/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
