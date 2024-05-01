import { RouteObject } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { LoginPage, RegisterPage } from "../pages/auth";


const AuthRouter : RouteObject[] = [
    {
        path:'/auth/',
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'register',
                element: <RegisterPage/>
            }
        ]
    }
]

export default AuthRouter;