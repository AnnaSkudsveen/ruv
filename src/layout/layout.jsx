import { Outlet } from "react-router-dom";
import Navbar from "./nav";
import Footer from "./footer";
import React from "react";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
