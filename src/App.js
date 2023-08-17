import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Travel from './pages/Travel/Travel';
import Admin from './pages/Admin/Admin';
import './App.css';
import { getTravel } from './redux/action/getTravel';
import { getSign } from './redux/action/getSign';
import NavBar from './components/navbar/NavBar';
import ModalAction from './components/ModalAction/ModalAction';
import Loader from './components/Loader/Loader';
import TravelMoreInfo from './components/travelMoreInfo/TravelMoreInfo';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export default function App()
{
  const dispatch = useDispatch();
  useEffect(() =>
  {
    dispatch(getTravel());
    dispatch(getSign());
  }, []);
  const checkACtion = useSelector((s) => s.check.value);
  const adminStatus = useSelector((s) => s.getCheckAdmin.value);
  const loader = useSelector((s) => s.loader.value);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />} >
            <Route index element={<Home />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/travel/:id" element={<TravelMoreInfo />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
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
