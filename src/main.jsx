import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";
import RequireAuth from "./hooks/PrivateRout.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

// ⚡️ Правильная структура
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />, // Доступно всем
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <App />
      </RequireAuth>
    ),
    children: [
      {
        path: "home", // /home
        element: <Home />,
      },
      {
        path: "admin", // /admin
        element: <Admin />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <Provider store={store}>
    <RouterProvider router={router} />
   </Provider>
  </StrictMode>
);
