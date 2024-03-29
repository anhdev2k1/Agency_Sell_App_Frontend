import "./assets/style/GlobalStyle.scss";
import DefaultLayout from "./layouts/DefaultLayout";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/index";
import axios from "axios";
import { useDispatch } from "react-redux";
import { checkUser } from "./redux/features/userSlice";
import UserLayout from "./layouts/UserLayout";
import { addToCart } from "./redux/features/CartSlice";
function App() {
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem("token")) || {};
  useEffect(() => {
    const getCurrentUser = async () => {
      const res = await axios({
        method: "POST",
        url: "http://localhost:5000/api/auth/currentUser",
        data: { token },
        headers: { "Content-Type": "application/json" },
      });

      dispatch(checkUser(res.data.data));
    };
    getCurrentUser();
  }, []);

  useEffect(() => {
    const getAllCart = async () => {
      const res = await axios({
        method: "POST",
        url: "http://localhost:5000/api/cartUser",
        data: { token },
        headers: { "Content-Type": "application/json" },
      });
      res.data.data.map((item) =>
        dispatch(addToCart({ ...item.product_id, quantity_p: item.quantity_p }))
      );
    };
    getAllCart();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout =
              route.layout === null
                ? Fragment
                : route.layout === "user"
                ? UserLayout
                : DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
