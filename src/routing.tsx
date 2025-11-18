import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Timeline from './pages/Timeline';
import MoreDetails from './pages/MoreDetails';
import App from './App';
import Layout from './components/Layout';
import ReferencePage from './pages/ReferencePage';

export function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<App />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/more-details" element={<MoreDetails />} />
                    <Route path="/reference-page" element={<ReferencePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
