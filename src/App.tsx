import './App.scss';
import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';

import AppRoutes from './config/AppRoutes';

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
