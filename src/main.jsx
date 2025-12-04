import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Home from './Component/Home.jsx'
import Navbar from './Component/Navbar.jsx'
import ProductList from './Component/ProductList.jsx'
import Product from './Component/Product.jsx'
import Singin from './Component/Singin.jsx'
import ListVideo from './Component/ListVideo.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Product/>
  <Navbar/>
  
  
    <ProductList/>
    
   
      </>

)
