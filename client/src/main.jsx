import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

const server = import.meta.env.VITE_SERVER;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: `${server}/signup`,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
