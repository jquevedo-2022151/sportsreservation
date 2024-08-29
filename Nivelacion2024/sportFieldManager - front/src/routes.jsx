import { DashboardPage } from "./pages/DashboardPage.jsx";
import { AuthPage } from "./pages/AuthPage.jsx";
import { NotFound } from "./pages/NotFound.jsx";

const routes = [
    { path: "/auth", element: <AuthPage/> },
    { path: "/", element: <DashboardPage/> },
    {path: "/*", element: <NotFound/>}
]

export default routes;
