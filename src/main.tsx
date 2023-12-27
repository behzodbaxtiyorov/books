import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./store";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store} >
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#c9ac8c",
          borderRadius: 6,
          colorBgContainer: "#f6ffed",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
