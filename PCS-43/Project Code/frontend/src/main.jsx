import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SidebarProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </SidebarProvider>
  </Provider>
);
