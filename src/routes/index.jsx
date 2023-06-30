import React, { useContext } from 'react'
import {BrowserRouter, Routes, Route, Outlet, Navigate} from "react-router-dom"

import App from "../App"
import Login from "../Pages/Login/index"
import Dashboard from "../Pages/Dashboard/index"
import MapaLojas from "../Pages/MapaLojas/index"
import useAuth from '../hooks/useAuth'

const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem("user_token")) ?? null

  return (
    !!user.token ? <Outlet /> : <Navigate to="/login" />
  )
}

function Router(){
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<Dashboard />}/>
                    <Route path='/mapa-lojas' element={<MapaLojas />}/>
                </Route>
            </Route>
            <Route path='/login' element={<Login />} />
        </Routes>    
    </BrowserRouter>
  )
}

export default Router