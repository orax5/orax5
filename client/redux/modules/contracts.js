import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import dtsToken from "../../contracts/DtsToken.json";
import saleToken from "../../contracts/SaleToken.json";
import fundingToken from "../../contracts/FunddingToken.json";

const {
  connector,
  library,
  chainId,
  account,
  active,
  error,
  activate,
  deactivate,
} = useWeb3React();

export const getContract = () => {
  return async (dispatch, getState) => {
    const dtsCA = dtsToken.networks[chainId].address;
    const abi = dtsToken.abi;
    console.log(dtsCA, abi);

    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    console.log(signer);

    const web3 = new ethers.Contract(dtsCA, abi, provider);
    console.log(web3);

    const saleCA = saleToken.networks[chainId].address;
    console.log({ saleCA });
    const fundingCA = fundingToken.networks[chainId].address;
    console.log({ fundingCA });

    // if (!getState().contract.eventCheck)
    //   eventSubscribe(dispatch, utils, web3, eggDeployed, saleDeployed);

    dispatch({
      type: GET_CONTRACT,
      payload: {
        web3,
        dtsCA,
        abi,
        provider,
        saleCA,
        fundingCA,
      },
    });
  };
};

const init = {
  web3: null,
};

function contracts(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTRACT:
      return { ...state, ...payload };

    default:
      return state;
  }
}

export default contracts;
