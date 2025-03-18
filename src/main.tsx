import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { app } from "./firebaseConfig";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);