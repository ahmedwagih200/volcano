import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Login } from "./components/forms/login";
import { Signup } from "./components/forms/Signup";
import Empty from "./components/forms/Empty";
import Main from "./pages/Main";
import Navbar from "./components/navbar/Navbar";
import "./style.css";
import "./components/footer/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/cart/Cart";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    toast.success("We are having big sales on pancakes !");
  }, []);
  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path="Main" element={<Main />} />

          <Route path="Empty" element={<Empty />}>
            <Route path="Signup" element={<Signup />} />
            <Route path="Login" element={<Login />} />
          </Route>

          <Route path="cart" element={<Cart />} />

          <Route path="" element={<Navigate to="/Main" />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
