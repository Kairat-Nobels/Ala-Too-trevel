import React, { useEffect } from 'react';
import style from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Travel from './pages/Travel/Travel';
import Admin from './pages/Admin/Admin';
import styles from './App.css';
import { getTravel } from './redux/action/getTravel';
import { getSign } from './redux/action/getSign';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import ModalAction from './components/ModalAction/ModalAction';
import Loader from './components/Loader/Loader';
import TravelMoreInfo from './components/travelMoreInfo/TravelMoreInfo';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTravel());
    dispatch(getSign());
  }, []);
  const checkACtion = useSelector((s) => s.check.value);
  const adminStatus = useSelector((s) => s.getCheckAdmin.value);
  const loader = useSelector((s) => s.loader.value);
  return (
    <div>
      <BrowserRouter>
        {true && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/travel/:id" element={<TravelMoreInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        {true && <Footer />}
        {checkACtion == 'accept' ? (
          <ModalAction typeAction={true} />
        ) : (
          checkACtion == 'error' && <ModalAction typeAction={false} />
        )}
        {loader && <Loader />}
      </BrowserRouter>
    </div>
  );
}
