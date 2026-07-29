import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Favouite from "../pages/Favouite";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ArtistDashboard from "../pages/ArtistDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'favorite',
                element: <Favouite />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'artist',
                element: <ArtistDashboard />
            }
        ]
    }
])


export default router