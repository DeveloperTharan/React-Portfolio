import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./page/home";
import { About } from "./page/about";
import { MainLayout } from "./components/main-layout";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
      <Toaster position="bottom-right" theme="dark" duration={5000} />
    </>
  );
}
