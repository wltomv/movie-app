import { Routes, Route } from 'react-router-dom';

import { Home, Catalog, Detail } from '../pages';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category/search/:keyword" element={<Catalog />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/:category" element={<Catalog />} />
        </Routes>
    );
}

export default AppRoutes;
