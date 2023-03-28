import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FormProvider from "./store/FormContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);