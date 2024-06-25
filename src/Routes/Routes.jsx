import React from 'react'
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import { useSelector } from 'react-redux';

const Routes = () => {
    const auth = useSelector(state=>state?.login?.auth);
    return auth ? <MainRoutes /> : <LoginRoutes />;
}

export default Routes
