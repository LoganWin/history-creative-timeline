import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Timeline from './pages/Timeline';
import App from './App';
import Layout from './components/Layout';

export function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<App />} />
                    <Route path="/timeline" element={<Timeline />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}