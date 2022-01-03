import Login from "./views/login/Login.jsx";
import Register from "./views/login/Register.jsx";
import ForgotPassword from "./views/login/ForgotPassword.jsx";
import Products from "./views/products/Products.jsx";
import Support from "./views/support/Support.jsx";
import Account from "./views/account/Account.jsx";

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
    layout: "auth",
    name: "Forgot Password",
    path: "forgot-password",
    component: ForgotPassword,
  },
  {
    layout: "app",
    path: "products",
    name: "Products",
    component: Products,
    showInSidebar: true,
  },
  {
    layout: "app",
    path: "support",
    name: "Support",
    component: Support,
    showInSidebar: true,
  },
  {
    layout: "app",
    path: "account",
    name: "Account",
    component: Account,
    showInSidebar: true,
  },
];

export const authRoutes = routes.filter((route) => route.layout === "auth");
export const appRoutes = routes.filter((route) => route.layout === "app");
export const sidebarRoutes = routes.filter(
  (route) => route.layout === "app" && route.showInSidebar
);
