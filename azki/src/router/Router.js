import React, { lazy } from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

// pages
const Register = lazy(() => import('../views/pages/authentication/register/Register'));
const Cars = lazy(() => import('../views/pages/cars/Cars'));
const LastInsurance = lazy(() => import('../views/pages/lastInsurance/LastInsurance'));
const Discount = lazy(() => import('../views/pages/discount/Discount'));


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Register />} exact />
                <Route path={'/cars'} element={<Cars />} exact />
                <Route path={'/last-insurance'} element={<LastInsurance />} exact />
                <Route path={'/discount'} element={<Discount />} exact />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRouter;