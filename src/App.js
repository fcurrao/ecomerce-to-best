

import '../src/Styles/App.sass'
import '../src/Styles/App.css'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbara from './components/Navbara';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import { useParams } from 'react-router-dom'
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import Modal from './components/Modal/Modal';
// import Detail from './pages/Detail';
// import Products from './pages/Products';
// import Descuento from './pages/Descuento';
// import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext';
import { CartContext } from './context/CartContext';
import BarraCart from './components/BarraCart';
import Oferta from './components/Oferta';

function App() {
  return (<>
    <CartProvider >
      <BrowserRouter>
        <div className="colorFondo">
          <Oferta />
          <div className="padding">
          <BarraCart />
          <Navbara />
          <Routes>
            <Route path="/ecomerce-to-best" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/categorias/:categoryid" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/about" element={<About />} />
            {/* <Route path="/descuento/:filtradito" element={<Descuento />} /> */}
            {/* <Route path="/productos/" element={<Products />} /> */}
            {/* <Route path="/productos/:id" element={<Detail />} /> */}
            {/* <Route path="/categorias/:categoryid" element={<ItemListContainer />} /> */}
            {/* <Route path="/cart" element={<Checkout />} /> */}
            <Route path="*" element={<h1 className='centrado margenes'>ERROR 404 - PAGINA NO ENCONTRADA</h1>} />
          </Routes>
          <div className="redondel">  
            <a href="https://wa.me/541165727900" target="_blank" class="js-btn-fixed-bottom btn-whatsapp" aria-label="Comunicate por WhatsApp">
            <img className="whtsimag" src="/assets/img/otras/whts.png"  alt="whatsapp"></img> </a>
          </div>
        </div>
        </div>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  </>
  );
}

export default App;


