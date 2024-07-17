import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./components/RootLayout";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import CategoryItems from "./Pages/CategoryItems";
import FoodDetail from "./Pages/FoodDetail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "category/:cata",
          element: <CategoryItems />,
        },

        {
          path: "food-detail/:id",
          element: <FoodDetail />,
        },

        {
          path: "about-page",
          element: <About />,
        },
        {
          path: "contact-page",
          element: <Contact />,
        },

        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
