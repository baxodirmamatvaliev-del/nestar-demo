/** GLOBAL INTEGRATION _app.tsx **/
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme, type ThemeOptions } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme";
import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";
import "../scss/app.scss"
import "../scss/pc/main.scss"
import "../scss/mobile/main.scss"

export default function App({ Component, pageProps }: AppProps) {
  const [theme] = useState(() => createTheme(light as ThemeOptions));

  // Socket.io, Redux, Mui Apollo Client ...
  return (
  <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
     </ThemeProvider>
  </ApolloProvider>

  );
}
