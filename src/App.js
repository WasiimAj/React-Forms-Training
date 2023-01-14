import React from 'react'
import './index.css';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Profile from './Components/Profile';


const App = () => {

  // const routes = useRoutes([
  //   {path: '/', element:<Home/>},
  //   {path: '/about', element:<About/>},
  //   {path: '/contact', element:<Contact/>},
  //   {path: '/todos', element:<Todos/>},
  //   {path: '*', element:<p>PAGE NOT FOUND 404</p>},
  // ])
  
  const routes = useRoutes([
    {path: '/', element:<Login/>},
    {path: '/signup', element:<Signup/>},
    {path: '/login', element:<Login/>},
    {path: '/profile', element:<Profile/>},
    {path: '/*', element:<p>PAGE NOT FOUND 404</p>},
  ])

  return (routes);
}

export default App