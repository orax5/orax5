import { ethers } from "ethers";
import { useState, useEffect } from "react";

export const useWallet = () => {
  const [info, setInfo] = useState({});
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    // provider.getNetwork()
    // setChainId(provider._network.chainId);
    // provider.listAccounts().then((acc) => {
    //   setAccount(acc);
    // });
    (async () => {
      const [{ chainId }, [account]] = await Promise.all([provider.getNetwork(), provider.listAccounts()]);
      console.log(chainId,account);
      setInfo({ chainId, account });
    })();
  }, []);

  return {
    info,
    provider,
  };
};