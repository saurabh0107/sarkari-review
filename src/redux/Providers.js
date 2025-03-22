"use client";  // Ensures Redux is available in Client Components

import { Provider } from "react-redux";
import store from "./store";

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
