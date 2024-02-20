import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Home } from "../pages/Home";
import { Gallery } from "../pages/Gallery";
import { Contact } from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />},
      {path: "/gallery", element: <Gallery />},
      {path: "/contact", element: <Contact />}
    ],
  },
]);

export function AppRoute() {
    return <RouterProvider router={router}/>
}