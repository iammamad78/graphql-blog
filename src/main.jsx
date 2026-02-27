import { createRoot } from "react-dom/client";

import "./styles/index.css";
import "./styles/fonts.css";

import App from "./App.jsx";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme.js";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://us-west-2.cdn.hygraph.com/content/cmk0wn9yf03gp07w51vfxs90s/master",
  }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
);
