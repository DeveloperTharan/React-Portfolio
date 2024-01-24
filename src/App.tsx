import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./page/home";
import { About } from "./page/about";
import { Contact } from "./page/contact";
import { MainLayout } from "./components/main-layout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}
