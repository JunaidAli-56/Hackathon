import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Frontend from "./Frontend"
import Auth from "./Auth"
import Dashboard from './Dashboard'

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Frontend />} />
                <Route path="/auth/*" element={<Auth />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default index