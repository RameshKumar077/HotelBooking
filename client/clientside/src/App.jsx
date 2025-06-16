import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import { useAppContext } from './context/AppContext';
import Layout from './pages/hotelowner/Layout';
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
   const { showHotelReg } = useAppContext();
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg />}
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<AllRooms />} />
        <Route path='/rooms/:id' element={<RoomDetails />} />
        <Route path='my-bookings' element={<MyBookings />} />
        <Route path="/owner" element={<Layout />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App