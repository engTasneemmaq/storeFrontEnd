import './App.css';
import Home from './components/home';
import Header from './components/header';
import { Routes, Route } from "react-router-dom";
import Products from './components/products';
import Product from './components/product'
import Cart from './components/cart';
import Footer from './components/footer';
import SimpleCart from "./components/simpleCart";

function App() {
  return (
    <>
      <Header />
      <SimpleCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;