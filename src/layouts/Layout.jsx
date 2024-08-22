import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MiniHeader from '../components/MiniHeader';
import MiniFooter from '../components/MiniFooter';
const Layout = () => {
  return (
    <div className="layout">
    {/*  <MiniHeader /> */}  
       <Header /> 
      <main className="main" id="top">
        <Outlet />
      </main>
      <Footer /> 
    </div>
  )
}

export default Layout