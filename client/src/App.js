import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/cart/Cart';
import { Navbar } from './components/Navbar';
import Shop from './pages/shop/Shop';
import { ShoppingContextProvider } from './context/ShoppingContext';

function App() {
    return (
        <>
            <ShoppingContextProvider>
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
            </ShoppingContextProvider>
        </>
    );
}

export default App;
