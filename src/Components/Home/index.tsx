import React, { useEffect, useState } from "react";

//@ts-ignore
import { useWeb3React } from "@web3-react/core";
import { hooks as metaMaskHooks, metaMask } from "../Hooks/metaMask";

import { AllConnectors } from "Components/Connectors/AllConnectors";
import { DataContainer, HomeContainer } from "./style";
const ethers = require("ethers");

export const Home = () => {
  const {
    useChainId,
    useAccounts,
    useIsActivating,
    useIsActive,
    useProvider,
    useENSNames,
  } = metaMaskHooks;

  const chainId_metamask = useChainId();
  const accounts_metamask = useAccounts();
  const isActivating_metamask = useIsActivating();

  const isActive_metamask = useIsActive();

  const provider_metamask = useProvider();
  const ENSNames_metamask = useENSNames(provider_metamask);

  const [error, setError] = useState(undefined);
  const [myBalance, setMyBalance] = useState("");

  const getMyBalance = async () => {
    if (isActive_metamask) {
      console.log("this is accounts ", accounts_metamask);

      let newBalance = await provider_metamask?.getBalance(
        //@ts-ignore
        accounts_metamask[0]
      );
      console.log("this is newBalance ", newBalance);

      const balanceInEth = ethers.utils.formatEther(newBalance);
      console.log("this is balanceInEth ", balanceInEth);

      //@ts-ignore
      setMyBalance(balanceInEth);
    }
  };

  useEffect(() => {
    getMyBalance();
  }, [isActive_metamask]);
  return (
    <HomeContainer>
      <h1>Metamask</h1>
      {isActive_metamask ? (
        <div>
          <DataContainer>
            <h2>Chain ID :</h2> <span> {chainId_metamask}</span>
          </DataContainer>
          <DataContainer>
            <h2>Accounts :</h2> <span>{accounts_metamask}</span>
          </DataContainer>
          <DataContainer>
            <h2>isActive :</h2> <span> {String(isActive_metamask)}</span>
          </DataContainer>
          <DataContainer>
            <h2>Balance :</h2> <span> {myBalance} Eth </span>
          </DataContainer>
        </div>
      ) : (
        <h3>It is not active</h3>
      )}
    </HomeContainer>
  );
};
