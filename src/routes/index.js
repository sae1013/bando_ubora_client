import { createBrowserRouter } from "react-router-dom";

import {
  App,
  About,
  Home,
  Danji,
  Intro,
  Preview,
  Subscription,
  Supply,
  CustomerService,
} from "../pages";

const routes = [
  {
    vis:true,
    name: "홈",
    path: "",
    element: <Home />,
  },
  {
    vis:true,
    name: "사업안내",
    path: "intro",
    element: <Intro />,
  },
  {
    vis:true,
    name: "단지안내",
    path: "danji",
    element: <Danji />,
  },
  {
    vis:true,
    name: "분양안내",
    path: "supply",
    element: <Supply />,
  },
  {
    vis:false,
    // name:'blank',
    path: "subscription",
    element: <Subscription />,
  },
  {
    vis:false,
    // name:'blank',
    path: "about",
    element: <About />,
  },
  {
    vis:true,
    name: "E-미리보기",
    path: "preview",
    element: <Preview />,
  },
  {
    vis:true,
    name: "상담접수",
    path: "cs",
    element: <CustomerService />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
]);

export { router, routes };
