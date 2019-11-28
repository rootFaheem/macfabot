import React from "react";

import AppBar from "./appbar/appbar";
import Landing from "./landing/landing";
import Footer from "./footer/footer";

export default function layout() {
  return (
    <div>
      <AppBar></AppBar>
      <Landing></Landing>
      <Footer></Footer>
    </div>
  );
}
