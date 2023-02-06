import { useWeb3React } from "@web3-react/core";

function web3() {
  const {
    connector, // 현재 dapp에 연결된 월렛의 connector 값
    library, // web3 provider 제공
    chainId, // dapp에 연결된 account의 chainId
    account, // dapp에 연결된 account address
    active, // active: dapp 유저가 로그인 된 상태인지 체크
    error,
    activate, // activate: dapp 월렛 연결 기능 수행함수
    deactivate, // deactivate: dapp 월렛 해제 수행함수
  } = useWeb3React();
  console.log(connector);
  return (
    <div className="App">
      {connector}
      {active}
    </div>
  );
}

export default web3;
