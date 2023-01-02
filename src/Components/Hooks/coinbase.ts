import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { initializeConnector } from "@web3-react/core";

export const [coinbase, hooks] = initializeConnector<CoinbaseWallet>(
  (actions) =>
    new CoinbaseWallet({
      actions,
      //@ts-ignore
      options: {
        url: "https://goerli.infura.io/v3/30525f1d08384859ad483663c37bb5e2",
        // appName: "My Coinbase App",
      },
    })
);
