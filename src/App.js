import {BrowserRouter as Router, Route, Routes, Navigate, Outlet} from "react-router-dom";
import Login from './components/forms/login';
import ResetPassword  from './components/forms/ResetPassword';
import ResetPasswordConfirm  from './components/forms/ResetPasswordConfirm';
import Signup from './components/forms/Signup';
import Activate from './components/forms/Activate';
import Empty from './components/forms/Empty';
import Main from './pages/Main'
import Navbar from './components/navbar/Navbar'
import './style.css';
import "./components/footer/footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './store';
import Profile from "./components/forms/Profile";
import ChangePassword from "./components/forms/ChangePassword";

function App() {
    return (
        <Provider store={store}>

            <Router>
                <Navbar/>
                <Routes>
                    <Route path="Main" element={<Main/>}/>

                    <Route path="Empty" element={<Empty/>}>

                        <Route path="Signup" element={<Signup/>}/>
                        <Route path="Login" element={<Login/>}/>
                        <Route path="ResetPassword" element={<ResetPassword/>}/>


                    </Route>

                    <Route path="password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm/>}/>
                    <Route path='activate/:uid/:token' element={<Activate/>}/>
                    <Route path="" element={<Navigate to="/Main"/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
