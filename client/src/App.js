import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Comic from './pages/Comic';
import Chapter from './pages/Chapter';
import Footer from './components/Footer';

function App() {
    // Estado para controlar el componente activo
    const [activePage, setActivePage] = useState('Home');

    // Función para cambiar de página
    const renderPage = () => {
        switch (activePage) {
            case 'Home':
                return <Home />;
            case 'Comic':
                return <Comic />;
            case 'Chapter':
                return <Chapter />;
            default:
                return <Home />;
        }
    };

    return (
        <div>
            {/* Pasamos setActivePage como prop a Header */}
            <Header setActivePage={setActivePage} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default App;
