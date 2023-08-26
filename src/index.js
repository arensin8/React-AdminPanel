import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </StrictMode>
);
