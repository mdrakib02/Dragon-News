import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import NewsCategory from "../Components/LayoutComponent/RightNavComponents/NewsCategory";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to={"/category/01"} />
            },
            {
                path: "/category/:category_id",
                element: <NewsCategory></NewsCategory>,
                loader: (params) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.params.category_id}`)
                
            }
        ]
    },
    {
        path: "news",
        element: <h1>News Feed</h1>
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                path: "/auth",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }

        ]
    },
    {
        path: "*",
        element: <h1>Error Page</h1>
    },

])

export default router