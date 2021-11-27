import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = null; // determina se está autorizado

    // Se autorizado retorna a página com listas 
    // Se não for autorizado é redirecionado para a página de erro 404
    return auth ? <Outlet /> : <Navigate to="/404" />;
}

export default PrivateRoute