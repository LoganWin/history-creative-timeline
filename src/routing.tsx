import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Timeline from './pages/Timeline';
import About from './pages/About';
import App from './App';
import Layout from './components/Layout';
import Contact from './pages/Contact';

export function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<App />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
