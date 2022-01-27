import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/NavBar';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>            
            <Routes>

                <Route path="/login" element={<LoginScreen />} />

                <Route path="/*" element={<DashboardRoutes/>}/>
            </Routes>
        </BrowserRouter>
    );
};
