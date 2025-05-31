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
import CreateResume from './pages/CreateResume/CreateResume'
import ResumeInfo from './pages/ResumeInfo/ResumeInfo';
import EditResume from './pages/EditResume/EditResume';
import AboutPage from './pages/AboutPage/About';
import FAQ from './pages/FAQ/FAQ';
import Admin from './pages/Admin/Admin';
import Internships from './pages/Internships/Internships';
import ChatBot from './pages/ChatBot/ChatBot';

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
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <PublicRoute>
              <Registration />
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
        <Route
          path="/pc"
          element={
            <ProtectedRoute>
              <PersonalCabinet />
            </ProtectedRoute>
          }
        />
        <Route
          path="/internships"
          element={
            <ProtectedRoute>
              <Internships />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateResume />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resume/:id"
          element={
            <ProtectedRoute>
              <ResumeInfo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resume/edit/:id"
          element={
            <ProtectedRoute>
              <EditResume />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            // <ProtectedRoute>
              <ChatBot />
            // </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

        <Route path="/about" element={<AboutPage /> } />
        <Route path="/FAQ" element={<FAQ /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
