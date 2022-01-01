import Home from "./views/home/Home.jsx";
import Users from "./views/users/Users.jsx";
import Login from "./views/login/Login.jsx";
import Register from "./views/register/Register.jsx";

const routes = [
  {
    layout: "auth",
    name: "Login",
    path: "login",
    component: Login,
  },
  {
    layout: "auth",
    name: "Register",
    path: "register",
    component: Register,
  },
  {
    layout: "app",
    path: "home",
    name: "Home",
    component: Home,
    showInSidebar: true,
  },
  {
    layout: "app",
    path: "users",
    name: "Users",
    component: Users,
    showInSidebar: true,
  },
];

export const authRoutes = routes.filter((route) => route.layout === "auth");
export const appRoutes = routes.filter((route) => route.layout === "app");
export const sidebarRoutes = routes.filter(
  (route) => route.layout === "app" && route.showInSidebar
);
