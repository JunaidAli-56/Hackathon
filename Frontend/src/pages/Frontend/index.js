import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from './Home'

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<>No Page Found</>} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default index