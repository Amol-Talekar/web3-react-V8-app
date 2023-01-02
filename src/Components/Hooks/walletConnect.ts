import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";

const rpcArray = {
  56: ["https://bsc-dataseed1.binance.org/"],
};

//@ts-ignore
export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
  (actions) =>
    //@ts-ignore
    new WalletConnect({
      actions,
      options: {
        rpc: rpcArray,
      },
    })
);
