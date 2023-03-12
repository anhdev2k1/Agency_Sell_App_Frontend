import Home from "../pages/Home/Home";
import Explore from "../pages/Explore/explore";
import Register from "../pages/Register/register";
import Login from "../pages/Login/login";
const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: null,
  },
  {
    path: "/explore",
    component: Explore,
  },
  {
    path: "/register",
    component: Register,
    layout: null,
  },
  {
    path: "/login",
    component: Login,
    layout: null,
  },
];
export { publicRoutes };
