import React from 'react'
import {BrowserRouter, Routes, Route, Outlet, Navigate} from "react-router-dom"

import App from "../App"
import Login from "../Pages/Login/index"
import Dashboard from "../Pages/Dashboard/index"
import MapaLojas from "../Pages/MapaLojas/index"

const PrivateRoute = () => {
  let auth = false

  return (
      auth ? <Outlet /> : <Navigate to="/login" />
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