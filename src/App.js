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
<<<<<<< HEAD
import Empty from "./components/forms/Empty";
=======
import Form_container from "./components/forms/Form_container";
>>>>>>> faa68a398d7a212fb7b0584c7089278b8ff26519
import Main from "./pages/Main";
import Navbar from "./components/navbar/Navbar";
import "./style.css";
import "./components/footer/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import ChangePassword from "./components/forms/ChangePassword";
import Profile from "./components/forms/Profile";
import { CartProvider } from "react-use-cart";
import Category from "./pages/category";
import Cart from "./pages/Cart";
<<<<<<< HEAD
=======
import Reviews from "./components/reviews/Reviews";
>>>>>>> faa68a398d7a212fb7b0584c7089278b8ff26519
function App() {
  return (
    <Provider store={store}>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="Main" element={<Main />} />
            <Route path="category/:id" element={<Category />} />

<<<<<<< HEAD
            <Route path="Empty" element={<Empty />}>
=======
            <Route path="Form_container" element={<Form_container />}>
>>>>>>> faa68a398d7a212fb7b0584c7089278b8ff26519
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
<<<<<<< HEAD
=======
            <Route path="Reviews" element={<Reviews />} />
>>>>>>> faa68a398d7a212fb7b0584c7089278b8ff26519
          </Routes>
        </Router>
      </CartProvider>
    </Provider>
  );
}

export default App;
