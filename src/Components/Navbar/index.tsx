import React, { useEffect, useState } from "react";
//@ts-ignore
import { useWeb3React } from "@web3-react/core";
import { hooks as metaMaskHooks, metaMask } from "../Hooks/metaMask";
import {
  ConnectButton,
  NavbarCOntainer,
  DisconnectButton,
  ButtonDiv,
} from "./style";
import { AllConnectors } from "Components/Connectors/AllConnectors";

export const Navbar = () => {
  // const {
  //   useChainId,
  //   useAccounts,
  //   useIsActivating,
  //   useIsActive,
  //   useProvider,
  //   useENSNames,
  // } = metaMaskHooks;

  // const chainId = useChainId();
  // const accounts = useAccounts();
  // const isActivating = useIsActivating();

  // const isActive = useIsActive();

  // const provider = useProvider();
  // const ENSNames = useENSNames(provider);
  // const [error, setError] = useState(undefined);

  // // attempt to connect eagerly on mount
  // useEffect(() => {
  //   void metaMask.connectEagerly().catch(() => {
  //     console.debug("Failed to connect eagerly to metamask");
  //   });
  // }, []);

  const handleConnectToMetamask = () => {
    console.log("inside handleConnectToMetamask");
    AllConnectors.metamask.connector
      .activate(5)
      .then(() => console.log("complete"))
      .catch((error: any) => console.log(error));
  };

  const handleConnectCoinbase = () => {
    console.log("inside handleConnectToCoinbase");
    AllConnectors.coinbase.connector
      .activate(5)
      .then(() => console.log("complete"))
      .catch((error: any) => console.log(error));
  };

  const handleConnectWalletConnect = () => {
    console.log("inside handleConnectToWalletConnect");
    AllConnectors.walletConnect.connector
      .activate()
      .then(() => console.log("complete"))
      .catch((error: any) => console.log(error));
  };

  const handleDeactivate = () => {
    try {
      if (AllConnectors.metamask.connector?.deactivate) {
        void AllConnectors.metamask.connector.deactivate();
        // } else if (AllConnectors.coinbase.connector?.deactivate) {
        //   void AllConnectors.coinbase.connector.deactivate();
      } else {
        void AllConnectors.metamask.connector.resetState();
        void AllConnectors.coinbase.connector.resetState();
      }
    } catch (error) {
      console.error("Deactivate Func error", error);
    }
  };

  return (
    <NavbarCOntainer>
      <ButtonDiv>
        <ConnectButton onClick={handleConnectToMetamask}>
          Metamask
        </ConnectButton>

        <ConnectButton onClick={handleConnectCoinbase}>Coinbase</ConnectButton>

        {/* <ConnectButton onClick={handleConnectWalletConnect}>
          WalletConnect
        </ConnectButton> */}

        <DisconnectButton onClick={handleDeactivate}>
          Disconnect
        </DisconnectButton>
      </ButtonDiv>
    </NavbarCOntainer>
  );
};
