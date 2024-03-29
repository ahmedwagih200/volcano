import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./components/forms/login";
import ResetPassword from "./components/forms/ResetPassword";
import ResetPasswordConfirm from "./components/forms/ResetPasswordConfirm";
import Signup from "./components/forms/Signup";
import Activate from "./components/forms/Activate";


import Form_container from "./components/forms/Form_container";
import Main from "./pages/Main";
import Navbar from "./components/navbar/Navbar";
import "./style.css";
import "./components/footer/footer.css";
import './components/checkout/checkout.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import ChangePassword from "./components/forms/ChangePassword";
import Profile from "./components/forms/Profile";
import { CartProvider } from "react-use-cart";
import Category from "./pages/category";
import Cart from "./pages/Cart";
import Orders from "./pages/orders";
import Order from "./pages/order";
import Status from "./pages/status";

import Reviews from "./components/reviews/Reviews";
import MakeReview from "./components/reviews/MakeReview";

import Home from "./components/checkout/checkout";
import Cheackout_address from "./components/checkout/change address_checkout";
import Contact from "./components/contact/Contact";

function App() {

  return (
    <Provider store={store}>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="Main" element={<Main />} />
            <Route path="/" element={<Main />} />
            <Route path="category/:id" element={<Category />} />
            <Route path="orders" element={<Orders />} />
            <Route path="order/:id/:cost/:date" element={<Order />}  />
            <Route path="checkout" element={<Home />}/>
            <Route path="status/:id/:ord" element={<Status />}  />

            <Route path="Form_container" element={<Form_container />}>
              <Route path="Signup" element={<Signup />} />
              <Route path="Login" element={<Login />} />
              <Route path="ResetPassword" element={<ResetPassword />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="ChangePassword" element={<ChangePassword />} />
            </Route>

            <Route
              path="password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            <Route path="activate/:uid/:token" element={<Activate />} />
            <Route path="" element={<Navigate to="/Main" />} />
            <Route path="Cart" element={<Cart />} />

            <Route path="Reviews" element={<Reviews />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="MakeReview" element={<MakeReview />} />
          </Routes>
        </Router>
      </CartProvider>
    </Provider>
  );
}

export default App;
