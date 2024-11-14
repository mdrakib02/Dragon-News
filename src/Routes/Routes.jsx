import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>
    },
    {
        path: "news",
        element: <h1>News Feed</h1>
    },
    {
        path: "auth",
        element: <h1>Login</h1>
    },
    {
        path: "*",
        element: <h1>Error Page</h1>
    },

])

export default router