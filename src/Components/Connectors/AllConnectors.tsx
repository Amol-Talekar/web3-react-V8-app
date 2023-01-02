import React from "react";
import { Web3ReactHooks } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { WalletConnect } from "@web3-react/walletconnect";

import { hooks as metaMaskHooks, metaMask } from "../Hooks/metaMask";
import { hooks as coinbaseHooks, coinbase } from "../Hooks/coinbase";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "../Hooks/walletConnect";

export const connectors: [
  MetaMask | WalletConnect | CoinbaseWallet,

  Web3ReactHooks
][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbase, coinbaseHooks],
];

export const AllConnectors = {
  metamask: {
    connector: metaMask,
    hooks: metaMaskHooks,
  },
  walletConnect: {
    connector: walletConnect,
    hooks: walletConnectHooks,
  },

  coinbase: {
    connector: coinbase,
    hooks: coinbaseHooks,
  },
};
