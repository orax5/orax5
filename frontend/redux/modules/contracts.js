import dtsToken from "../../contracts/DtsToken.json";
import saleToken from "../../contracts/SaleToken.json";
import fundingToken from "../../contracts/FunddingToken.json";
import produce from "immer";
import { ethers } from "ethers";
const GET_CONTRACT = "contracts/GET_CONTRACT";
const ACCOUT_CHANGE = "contracts/ACCOUT_CHANGE";
const EVENT_CHECK = "contracts/EVENT_CHECK";

export const getContract = (account, chainId) => {
  return async (dispatch, getState) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const tokenData = {
    //   Dtoken: new ethers.Contract(dtsToken.networks[chainId].address, dtsToken.abi, provider.getSigner()),
    //   Ftoken: new ethers.Contract(fundingToken.networks[chainId].address, fundingToken.abi, provider.getSigner()),
    //   Stoken: new ethers.Contract(saleToken.networks[chainId].address, saleToken.abi, provider.getSigner()),
    //   DtokenCA: dtsToken.networks[chainId].address,
    //   FtokenCA: fundingToken.networks[chainId].address,
    //   StokenCA: saleToken.networks[chainId].address,
    // };

    const Dtoken = new ethers.Contract(dtsToken.networks[chainId].address, dtsToken.abi, provider.getSigner());
    const Ftoken = new ethers.Contract(fundingToken.networks[chainId].address, fundingToken.abi, provider.getSigner());
    const Stoken = new ethers.Contract(saleToken.networks[chainId].address, saleToken.abi, provider.getSigner());
    const DtokenCA = dtsToken.networks[chainId].address;
    const FtokenCA = fundingToken.networks[chainId].address;
    const StokenCA = saleToken.networks[chainId].address;
    // dispatch({
    //   type: GET_CONTRACT,
    //   payload: {
    //     tokenData,
    //   },
    // });
    dispatch({
      type: GET_CONTRACT,
      payload: {
        Dtoken,
        Ftoken,
        Stoken,
        DtokenCA,
        FtokenCA,
        StokenCA,
      },
    });
    console.log("dispatch됨");
  };
};

const init = {
  Dtoken: null,
  Ftoken: null,
  Stoken: null,
  DtokenCA: null,
  FtokenCA: null,
  StokenCA: null,
};

function contracts(state = init, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CONTRACT:
      return produce(state, (draft) => {
        // console.log(payload.Dtoken);
        // console.log(payload.Ftoken);
        // console.log(payload.Stoken);
        // draft.Dtoken = payload.tokenData.Dtoken;
        // draft.Ftoken = payload.tokenData.Ftoken;
        // draft.Stoken = payload.tokenData.Stoken;
        // draft.DtokenCA = payload.tokenData.DtokenCA;
        // draft.FtokenCA = payload.tokenData.FtokenCA;
        // draft.StokenCA = payload.tokenData.StokenCA;
        draft.Dtoken = payload.Dtoken;
        draft.Ftoken = payload.Ftoken;
        draft.Stoken = payload.Stoken;
        draft.DtokenCA = payload.DtokenCA;
        draft.FtokenCA = payload.FtokenCA;
        draft.StokenCA = payload.StokenCA;
      });
    case ACCOUT_CHANGE:
      return produce(state, (draft) => {
        draft.account = payload.account;
      });
    case EVENT_CHECK:
      return produce(state, (draft) => {
        draft.eventCheck = true;
      });
    default:
      return state;
  }
}

export default contracts;
