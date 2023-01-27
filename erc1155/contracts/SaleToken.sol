// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";
// import "../node_modules/openzeppelin-solidity/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "./DtsToken.sol";

contract SaleToken is Ownable{

    using SafeMath for uint256;

    // DtsToken.sol과 상호작용 하기 위한 상태변수
    DtsToken public DToken; 

    // 플랫폼 거래 수수료 상태 변수
    uint256 private Fee = 10;
    // 솔리디티는 소수점이 안되기 때문에 수수료 소수점을 표기해줄 상태 변수 하나를 설정한다.
    uint256 private constant decimalPoint = 100;

    // 해당 음원이 현재까지 팔린 양 확인하기 위한 매핑
    mapping(uint256 => uint256) private totalAmout;

    constructor(address DtsTokenCA){
        // 생성자에서 배포된 DtsToken CA를 받아서 Token 상태변수에 저장한다.
        DToken = DtsToken(DtsTokenCA); 
    }

    // DtsToken.sol에게 SaleCA를 넘겨주기 위해서 사용하는데 컨트랙트 오너만 사용 가능하다.
    function changedCA() onlyOwner external{
        DToken.isChangedCA(address(this));
    }

    // 유저가 펀딩하는 함수
    function userFundding(uint256 tokenId, uint256 amount) public payable{
        // 해당 음원 크리에이터를 불러온다.
        address owner = DToken.getTokenOwnerDataCreater(tokenId);
        // 펀딩마감 시간이 지났는지 체크한다.
        require(DToken.getTokenOwnerDataEndTime(tokenId) > block.timestamp, "Time Over");
        // 크리에이터가 자신의 음원 nft 사는지 체크한다.
        require(msg.sender != owner,"creater can't buy");
        // 보낸 금액이 0인지 체크한다.
        require(msg.value != 0, "have no money sent");
        // 보낸 금액이 유저가 사려고 하는 총 NFT 금액이랑 맞는지 체크한다.
        require(msg.value == (DToken.getTokenOwnerDataUnitPrice(tokenId) * amount),"The price doesn't match.");
        // 해당 음원 크리에이터 nft 갯수를 체크한다. (구매하는 양이 보유양보다 많으면 안됨.)1번
        require(DToken.balanceOf(owner, tokenId) >=  amount, "can't buy things.");
        // 해당 음원 발행량이랑 지금까지 펀딩된 수랑 비교해서 오버되지 않게 체크한다.(구매하는 양이 발행량을 넘어가면 안됨.)2번
        require(DToken.getTokenOwnerDataNftAmount(tokenId) - totalAmout[tokenId] >= amount,"be out of stock and unable to buy goods");
        // 현재 모금액과 해당 음원 목표금액을 비교
        // require(priceCheck(_tokenId) != DToken.getTokenOwnerDataTotalPrice(_tokenId), "Target amount has already been achieved");
        // 지금까지 펀딩한 현재 금액을 모아 놓는다.
        totalAmout[tokenId] = totalAmout[tokenId] + amount;
        DToken.safeTransferFrom(owner, msg.sender, tokenId, amount, "");
    }

    // 펀딩이 성공했을 때
    function isSuccessFundding(uint256 tokenId) public payable {
        // 펀딩 신청한 크리에이터 본인이 맞는지 확인
        require(msg.sender == DToken.getTokenOwnerDataCreater(tokenId), "Is that your wallet?");
        // 펀딩이 성공 했는지 확인
        require(DToken.getTokenOwnerDataTotalPrice(tokenId) == (DToken.getTokenOwnerDataUnitPrice(tokenId) * totalAmout[tokenId]), "Funding seccess ?");
        // uint256 Payment = SafeMath.div(DToken.getTokenOwnerDataTotalPrice(tokenId).mul(Fee),decimalPoint);
        // uint256 reFund = SafeMath.div(Payment.sub(DToken.getTokenOwnerDataTotalPrice(tokenId)),2);
        // CA에서 크리에이터에게 금액 전달
        payable(msg.sender).transfer(1 ether);
    }

    function aa(uint256 tokenId) public view returns(uint256){
        // uint256 Payment = SafeMath.div(DToken.getTokenOwnerDataTotalPrice(tokenId).mul(Fee),decimalPoint);
        // uint256 reFund = SafeMath.div(DToken.getTokenOwnerDataTotalPrice(tokenId).sub(Payment),2);
        uint256 reFund = (DToken.balanceOf(msg.sender, tokenId) * DToken.getTokenOwnerDataUnitPrice(tokenId)) / 2;
        return reFund;
    }

    // 펀딩이 실패했을 때
    function isFuckingFundding(address uWallet, uint256 tokenId) public payable {
        // 유저 본인이 맞는지 확인
        require(msg.sender == uWallet, "Is that your wallet?");
        // 유저가 펀딩을 해서 nft를 가지고 있는지 확인
        require(DToken.balanceOf(msg.sender, tokenId) > 0, "Is it a buyer ?");
        // 펀딩 시간이 지났는지 확인
        // require(DToken.getTokenOwnerDataEndTime(tokenId) < block.timestamp, "Time Over ?");
        // 펀딩이 실패 했는지 확인
        require(DToken.getTokenOwnerDataTotalPrice(tokenId) > (DToken.getTokenOwnerDataUnitPrice(tokenId) * totalAmout[tokenId]), "Funding failed ?");
        // 유저의 총 펀딩 금액
        // uint256 reFund = DToken.balanceOf(msg.sender, tokenId) * DToken.getTokenOwnerDataUnitPrice(tokenId);
        uint256 reFund = (DToken.balanceOf(msg.sender, tokenId) * DToken.getTokenOwnerDataUnitPrice(tokenId)) / 2;
        // CA에서 유저에게 금액 전달
        payable(msg.sender).transfer(reFund);
        // 그 후 유저 nft 소각
        DToken.faildBurn(msg.sender, tokenId, DToken.balanceOf(msg.sender, tokenId));
    }

    // 현재 모금액 확인 함수
    function priceCheck(uint256 tokenId) public view returns(uint256){
        return totalAmout[tokenId];
    }
    // 앞단에서는 이렇게 유저가 펀딩한 총 금액을 CA에 전송한다.
    //     await deployed.methods.buyFruit(appleBuy, bananaBuy, melonBuy).send({
    //     from : account,
    //     to : CA,
    //     value : web3.utils.toWei(c, "ether")
    // })
}