import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import Theme from "./ContextApi/ThemeContext/Theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>
);
