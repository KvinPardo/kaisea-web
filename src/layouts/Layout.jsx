import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="flex justify-center items-center w-full h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;