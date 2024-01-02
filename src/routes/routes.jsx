import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../layouts/ManiLayout";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <ManiLayout />,
        children: [
            {
                index: true,
                path: "/",
                element: <HomePage />
            },
            {
                path: "/contact",
                element: <ContactPage/>
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/register",
                element: <RegisterPage />
            }

        ]
    },
    
])
export default routes;