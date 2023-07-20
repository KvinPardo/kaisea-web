import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <main className="overflow-hidden">
        <Outlet />
        <ScrollToTop/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
