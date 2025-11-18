import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FinalHomePage } from "./screens/FinalHomePage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FinalHomePage />
  </StrictMode>,
);
