/** GLOBAL INTEGRATION _app.tsx **/
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme, type ThemeOptions } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [theme] = useState(() => createTheme(light as ThemeOptions));

  // Socket.io, Redux, Mui ...
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
