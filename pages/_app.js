import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Layout from "../components/layout";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}

export default MyApp;
