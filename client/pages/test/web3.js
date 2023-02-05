import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContract } from "../../redux/modules/contracts";
import { ethers } from "ethers";
import dtsToken from "../../contracts/DtsToken.json";
import saleToken from "../../contracts/SaleToken.json";
import fundingToken from "../../contracts/FunddingToken.json";
function web3() {
  useEffect(() => {
    const chainId = 7722;
    const dtsCA = dtsToken.networks[chainId].address;
    const abi = dtsToken.abi;
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const web3 = new ethers.Contract(dtsCA, abi, signer);
    const saleCA = saleToken.networks[chainId].address;
    const fundingCA = fundingToken.networks[chainId].address;
    console.log(ethers.utils);
    // 함수 실행해보려면 tokenId 있어야 되는데 tokenId 어케 구함
    // const tokenId = dtsToken.networks[chainId].tokenId;
    // console.log(tokenId);
    const test = web3.mintFundding(
      "0x95318241005ea96906801d53a94ab1a212e554ae8e5225275880173745ab964d",
      fundingCA,
      1,
      100,
      100,
      "2023 - 02 - 28"
    );

    console.log(test);
  });

  // const dispatch = useDispatch();
}

export default web3;
