import { ethers } from "ethers";
import { React, useState, useEffect } from "react";
import dtsToken from "./DtsToken.json";
import saleToken from "./SaleToken.json";
import fundingToken from "./FunddingToken.json";

const ajyContract = () => {
  const [tokenData, setTokenData] = useState(null);
  const dCA = "0xe8417547dae553834046b2f653c888cfb84f6fe0";
  const fCA = "0x6b11cC61CA3fD01D18F61B3945fC6178e4Ad6F9a";
  const sCA = "0x03EFc8cD336BFc5fea70E1de19c22aE001685f9c";
  useEffect(() => {
    // console.log(dtsToken);
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    (async () => {
      const { chainId } = await provider.getNetwork();
      const data = {
        Dtoken: new ethers.Contract(dCA, dtsToken.abi, provider.getSigner()),
        Ftoken: new ethers.Contract(fCA, fundingToken.abi, provider.getSigner()),
        Stoken: new ethers.Contract(sCA, saleToken.abi, provider.getSigner()),
        dtokenCA: dCA,
        ftokenCA: fCA,
        stokenCA: sCA,
      };
      setTokenData(data);
    })();
  }, []);

  return tokenData;
};

export default ajyContract;
