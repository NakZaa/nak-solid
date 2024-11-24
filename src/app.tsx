import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import Footer from "./components/Footer";
import { Meta, MetaProvider, Title } from "@solidjs/meta";
import { ColorModeProvider, ColorModeScript, cookieStorageManagerSSR } from "@kobalte/core";
import { getCookie } from "vinxi/http";
import { isServer } from "solid-js/web";

function getServerCookies() {
  "use server";
  const colorMode = getCookie("kb-color-mode");
  return colorMode ? `kb-color-mode=${colorMode}` : "";
}

export default function App() {
  const storageManager = cookieStorageManagerSSR(isServer ? getServerCookies() : document.cookie);
  return (
    <Router
      root={props => (
        <>
          <MetaProvider>
            <ColorModeScript storageType={storageManager.type} />
            <ColorModeProvider storageManager={storageManager}>
              <Title>Nak's</Title>
              <Meta name="keywords" content="Nak, Nakonkate" />
              <Meta name="og:description" content="where nak shares his life experience" />
              <Meta name="description" content="where nak shares his life experience" />
              <Nav />
              <Suspense>{props.children}</Suspense>
              <Footer />
            </ColorModeProvider>
          </MetaProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
