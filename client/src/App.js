import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/cart/Cart';
import { Navbar } from './components/Navbar';
import Shop from './pages/shop/Shop';

function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className="container">
                <main>
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="cart" element={<Cart />} />
                        {/* <footer>Footer</footer> */}
                    </Routes>
                </main>
            </div>
        </>
    );
}

export default App;
