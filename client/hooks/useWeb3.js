import { useEffect, useState } from 'react'
import Web3 from "web3/dist/web3.min";

const useWeb3 = () => {
    // 메타마스크에서 사용하고 있는 계정 
    const [accounts, setAccount] = useState(null);
    // 클라이언트랑 메타마스크를 통신 시켜줄 web3
    const [web3, setWeb3] = useState(null);

    const getRequestAccounts = async() =>{
        // 연결이 되어있는지 보고 메타마스크 계정들과 연결 요청
        // 연결이 되어있으면 메타마스크가 갖고 있는 계정들 중 사용하고 있는 계정 반환 
        const account = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        return account;
      }
      // ㅜ 이더리움 계정이 일어나면 accounts에 변경된 값을 담는다.
      function handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
          // MetaMask is locked or the user has not connected any accounts
          console.log('Please connect to MetaMask.');
        } else if (accounts[0] !== accounts) {
          setAccount(accounts[0]);
          // Do any other work!
        }
      }
      
      useEffect(()=>{
        // 화살표 async 즉시 실행 함수
        (async ()=>{
          if(!window.ethereum) return;
          const [account] = await getRequestAccounts();
          // web3 라이브러리 사용해서 메타마스크에 연결 
          const web3 = new Web3(window.ethereum);

          setAccount(account);
          setWeb3(web3);
        })()
        // ㅜ 이더리움 계정 변경하면 동작
        window.ethereum.on('accountsChanged', handleAccountsChanged);

    },[])

  return [web3, accounts];
}

export default useWeb3
