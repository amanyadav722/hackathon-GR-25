import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import ErrorPage from './pages/ErrorPage';
import MenuNavigation from './components/MenuNavigation';
import Footer from './components/Footer';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MenuNavigation />
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
