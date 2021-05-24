import "../styles/globals.css";
import { useEffect } from "react";
import LeftNav from "../components/LeftNav";
import Layout from "../components/Layout";

let rendered = false;
function MyApp({ Component, pageProps }) {
  useEffect(async () => {
    if (!rendered) {
      const MicroRouter = await import("../lib/micro-router");
      try {
        customElements.define("micro-router", MicroRouter.default),
          { extends: "div" };
      } catch {}

      console.log("defined");
    }
  }, []);

  return (
    <Layout>
      <LeftNav />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
