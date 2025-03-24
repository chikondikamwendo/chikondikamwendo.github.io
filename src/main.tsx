import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './assets/css/index.css';
import Guest from './layouts/guest.tsx';
import About from './pages/about.tsx';
import Contacts from './pages/contacts.tsx';
import Home from './pages/home.tsx';
import Projects from './pages/projects.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<Guest />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contacts" element={<Contacts />} />
            </Route>
            <Route path="/404" element={<h1>404</h1>} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    </BrowserRouter>,
);
