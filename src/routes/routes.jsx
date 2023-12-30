import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../layouts/ManiLayout";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <ManiLayout />
    }
])
export default routes;