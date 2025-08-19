import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route } from "react-router";
import App from "./App.jsx";
import { Routes } from "react-router";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Footer />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="favorite" element={<FavoritePage />} />
        </Route>
      </Routes>
      <App />
    </BrowserRouter>
  </StrictMode>
);
