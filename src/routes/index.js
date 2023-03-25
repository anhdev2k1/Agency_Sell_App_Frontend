import Home from "../pages/Home/Home";
import Explore from "../pages/Explore/explore";
import Register from "../pages/Register/register";
import Login from "../pages/Login/login";
import UPLOAD from "../components/UploadProduct";
import AccountUser from "../pages/User/accountUser";
import AddressUser from "../pages/User/addressUser";
import PasswordUser from "../pages/User/changePassword";
import PurchaseUser from "../pages/User/purchaseUser";
import NotifySystem from "../pages/User/notifySystem";
import NotifyOrder from "../pages/User/notifyOrder";
import NotifyRating from "../pages/User/notifyRating";
import Cart from "../pages/Cart/cart";
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
    path: "/cart",
    component: Cart,
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
  {
    path: "/upload",
    component: UPLOAD,
    layout: null,
  },
  {
    path: "/user/account/profile",
    component: AccountUser,
    layout: "user",
  },
  {
    path: "/user/account/address",
    component: AddressUser,
    layout: "user",
  },
  {
    path: "/user/account/password",
    component: PasswordUser,
    layout: "user",
  },
  {
    path: "/user/purchase",
    component: PurchaseUser,
    layout: "user",
  },
  {
    path: "/user/notifications/system",
    component: NotifySystem,
    layout: "user",
  },
  {
    path: "/user/notifications/order",
    component: NotifyOrder,
    layout: "user",
  },
  {
    path: "/user/notifications/rating",
    component: NotifyRating,
    layout: "user",
  },
];
export { publicRoutes };
