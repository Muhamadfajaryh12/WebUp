import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BerandaPage from "./pages/BerandaPage";
import { Route,Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import KarirPage from "./pages/KarirPage";
import AboutPage from "./pages/AboutPage";
import FormPage from "./pages/FormPage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <>
    <header><Navbar/></header>
    <main>
      <Routes>
      <Route path="/*" element={<NotFoundPage/>}/>
      <Route path="/" element ={<BerandaPage/>}/>
      <Route path="/product" element ={<ProductPage/>}/>
      <Route path="/career" element={<KarirPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/form/:id" element={<FormPage/>}/>
      </Routes>
    </main>
    <footer><Footer/></footer>
    </>
  );
}

export default App;
