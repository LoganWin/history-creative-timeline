import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Timeline} from './Timeline'; // adjust path if different

export function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="Timeline" element={<Timeline />} />
            </Routes>
        </BrowserRouter>
    );
}