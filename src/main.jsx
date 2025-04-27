import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/MainPage/MainPage';
import Login from './pages/Login/Login'

let Component;
switch (window.location.pathname) {
  case '/':
  case '/index.html':
    Component = MainPage;
    break;
  case '/login.html':
    Component = Login;
    break;
  default:
    Component = MainPage;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>
);
