import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProductListing from "./pages/Productlisting";
import ProductDetails from "./pages/productdetails";
import BreadCrumbs from "./components/breadCrumb.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello Pratik</h1>
        <BreadCrumbs/>
        {/* Breakcrumbs */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
