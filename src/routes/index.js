import { createBrowserRouter } from "react-router-dom";

import {
  App,
  About,
  Home,
  Danji,
  Arrangement,
  Intro,
  Preview,
  Subscription,
  Supply,
  CustomerService,
} from "../pages";

const routes = [
  {
    vis: false,
    name: "홈",
    path: "",
    element: <Home />,
  },
  {
    vis: true,
    name: "사업안내",
    path: "intro",
    element: <Intro />,
  },
  {
    vis: true,
    name: "단지안내",
    path: "danji",
    element: <Danji />,
  },
  {
    vis: true,
    name: "배치도",
    path: "arrangement",
    element: <Arrangement />,
  },
  {
    vis: true,
    name: "분양안내",
    path: "supply",
    element: <Supply />,
  },
  {
    vis: false,
    // name:'blank',
    path: "subscription",
    element: <Subscription />,
  },
  {
    vis: false,
    // name:'blank',
    path: "about",
    element: <About />,
  },
  {
    vis: true,
    name: "타입안내",
    path: "preview",
    element: <Preview />,
  },
  {
    vis: true,
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
