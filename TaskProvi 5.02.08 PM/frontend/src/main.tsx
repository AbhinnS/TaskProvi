import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useLocation } from 'react-router-dom';
import App from './App.tsx'
import Dashboard from './pages/dashboard.tsx'
import Message from './pages/message.tsx'
import Home from './pages/dashhome.tsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </StrictMode>
)

function AppWrapper() {
  const location = useLocation();
  const state = location.state || {};
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

  const userId = state.userId || storedUser.userId || "";

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard/:userId" element={<Dashboard />}>
      <Route index element={<Home />} /> 
      <Route path="message" element={<Message />} /> 
    </Route>
    </Routes>
  );
}
