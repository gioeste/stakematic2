import { ThirdwebProvider } from '@thirdweb-dev/react';
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "polygon";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp
