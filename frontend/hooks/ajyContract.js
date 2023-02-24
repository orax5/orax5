import { ethers } from "ethers";
import { React, useState, useEffect } from "react";
import dtsToken from "./DtsToken.json";
import saleToken from "./SaleToken.json";
import fundingToken from "./FunddingToken.json";

const ajyContract = () => {
  const [tokenData, setTokenData] = useState(null);
  const dCA = "0x333EFcDE188Cd2Ae82A4DAC4852F6eCbBd16BE87";
  const fCA = "0xa55076c0cE30079911884C68a4460DC927F58b4B";
  const sCA = "0xfCbFeb749CA915155a79f56e0bb9aC834cf9C0DC";
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
