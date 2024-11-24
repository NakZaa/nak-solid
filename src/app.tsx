import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import Footer from "./components/Footer";
import { Meta, MetaProvider, Title } from "@solidjs/meta";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <MetaProvider>
            <Title>Nak's</Title>
            <Meta name="keywords" content="Nak, Nakonkate" />
            <Meta name="og:description" content="where nak shares his life experience" />
            <Meta name="description" content="where nak shares his life experience" />
            <Nav />
            <Suspense>{props.children}</Suspense>
            <Footer />
          </MetaProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
