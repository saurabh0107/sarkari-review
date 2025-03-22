"use client";  // Makes this a Client Component

import { Provider } from "react-redux";
import store from "@/redux/store";
import Homepage from "../components/HomePage/Homepage";

export default function HomeClient({ groups }) {
  return (
    <Provider store={store}>
      <Homepage groups={groups} />
    </Provider>
  );
}
