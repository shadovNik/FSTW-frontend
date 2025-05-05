import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import MainLogged from './pages/MainLogged/MainLogged';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import NotFound from './pages/NotFound/NotFound';
import PersonalCabinet from './pages/PersonalCabinet/PersonalCabinet';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <MainPage />
            </PublicRoute>
          }
        />
        <Route
          path="/main"
          element={
            <PublicRoute>
              <MainPage />
            </PublicRoute>
          }
        />
        <Route
          path="/logged"
          element={
            <ProtectedRoute>
              <MainLogged />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="/pc" element={<PersonalCabinet />} />
        <Route path="*" element={<NotFound />} /> {/* 404 для всех остальных */}
      </Routes>
    </BrowserRouter>
  )
}
