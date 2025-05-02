import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import MainLogged from './pages/MainLogged/MainLogged';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import NotFound from './pages/NotFound/NotFound';
import PersonalCabinet from './pages/PersonalCabinet/PersonalCabinet';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/logged" element={<MainLogged />} />
        <Route path="/pc" element={<PersonalCabinet />} />
        <Route path="*" element={<NotFound />} /> {/* 404 для всех остальных */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
