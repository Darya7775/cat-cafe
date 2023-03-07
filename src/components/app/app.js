import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/base/layout/layout";
import starList from "/src/mocks/starList";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import MainPage from "/src/components/pages/main-page/main-page";
import gallery from "/src/mocks/gallery";
import { GlobalStyle } from "./style.js";
import buyOptions from "/src/mocks/buyOptions";
import ScrollToTop from "/src/components/ui/scroll-to-top/scroll-to-top";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop />
        <Routes>
          <Route paht="/" element={<Layout />}>
            <Route index element={<MainPage stars={starList} />} />
            <Route
              path="buy"
              element={<BuyPage gallery={gallery} buyOptions={buyOptions} />}
            />
            <Route
              path="*"
              element={<p>Ошибка 404. Страница не существует.</p>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
