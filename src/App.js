import React, { Fragment } from "react";
// import logo from "./logo.svg";
import Header from "./components/Header";
import Info from "./components/Info";
import Vision from "./components/Vision";
import Product from "./components/Product";
import Footer from "./components/Footer";
// import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Info />
      <Vision />
      <Product />
      <Footer />
    </Fragment>
  );
}

export default App;
