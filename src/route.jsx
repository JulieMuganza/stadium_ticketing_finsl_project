import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login"
import Register from "./pages/Register";
import About from "./pages/About";
import UserDashboard from "./pages/UserDashboard";
import Booking from "./pages/Booking";
import AdminDashboard from "./pages/admin-pages/AdminDashboard";
import Viewclient from "./pages/admin-pages/Viewclient";
import SearchBookings from "./pages/admin-pages/SearchBookings";
import ViewSorted from "./pages/admin-pages/ViewSorted";
import EditClient from "./pages/admin-pages/EditClient";
import DownloadComponent from "./pages/admin-pages/DownloadComponent";


const router = createBrowserRouter([{
    path: "/",
    element: <Homepage />
},
{
    path: "/login",
    element: <Login />
}, {
    path: "/register",
    element: <Register />
}, {
    path: "/about",
    element: <About />
},
{
    path: "/user",
    element: <UserDashboard />
}, {
    path: "/book",
    element: <Booking />
}, {
    path: "/admin",
    element: <AdminDashboard />
}, {
    path: "/viewclient",
    element: <Viewclient />
}, {
    path: "/admin/viewsorted",
    element: <ViewSorted />
}, {
    path: "/edit/:id",
    element: <EditClient />
}, {
    path: "/download/:id",
    element: <DownloadComponent />
}
])

export default router;