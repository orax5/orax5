import React, { useState } from "react";
import dtsToken from "../contracts/DtsToken.json";
import saleToken from "../contracts/SaleToken.json";
import fundingToken from "../contracts/FunddingToken.json";
import { ethers } from "ethers";
import { useWallet } from "./useWallet";

const useContract = () => {
  // const [contract, setContract] = useState();
  const { info, provider } = useWallet();

  const tokenData = (account, chainId) => {
    console.log("asdasd");
    if (!account || !chainId) return true;
    return {
      Dtoken: new ethers.Contract(dtsToken.networks[chainId].address, dtsToken.abi, provider.getSigner()),
      Ftoken: new ethers.Contract(fundingToken.networks[chainId].address, fundingToken.abi, provider.getSigner()),
      Stoken: new ethers.Contract(saleToken.networks[chainId].address, saleToken.abi, provider.getSigner()),
      dtokenCA: dtsToken.networks[chainId].address,
      ftokenCA: fundingToken.networks[chainId].address,
      stokenCA: saleToken.networks[chainId].address,
    };
  };

  return tokenData(info.account, info.chainId);
};

export default useContract;
