import { ethers } from "ethers";
import { React, useState, useEffect } from "react";
import dtsToken from "../contracts/DtsToken.json";
import saleToken from "../contracts/SaleToken.json";
import fundingToken from "../contracts/FunddingToken.json";

const ajyContract = () => {

    const [tokenData,setTokenData] = useState(null);
    
    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        
        (async () => {
            const { chainId } = await provider.getNetwork();
            console.log(chainId);
            console.log("#$#$#$#");
             const data = {
                Dtoken: new ethers.Contract(dtsToken.networks[chainId].address, dtsToken.abi, provider.getSigner()),
                Ftoken: new ethers.Contract(fundingToken.networks[chainId].address, fundingToken.abi, provider.getSigner()),
                Stoken: new ethers.Contract(saleToken.networks[chainId].address, saleToken.abi, provider.getSigner()),
                dtokenCA: dtsToken.networks[chainId].address,
                ftokenCA: fundingToken.networks[chainId].address,
                stokenCA: saleToken.networks[chainId].address,
            };
            setTokenData(data);
        })();
    },[])

  return tokenData;
};

export default ajyContract;