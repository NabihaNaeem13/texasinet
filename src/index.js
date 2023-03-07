import { createRoot } from "react-dom/client";
import { AppProvider } from "./context/BlogContext";
import {FilterContextProvider} from "./context/filterContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppProvider>
  <FilterContextProvider>
  <App />
  </FilterContextProvider>
  </AppProvider>
);
