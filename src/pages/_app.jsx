import { Layout } from "@/components/Layout";

import global from "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
