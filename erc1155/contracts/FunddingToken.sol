// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/utils/math/SafeMath.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "./DtsToken.sol";

contract FunddingToken is Ownable{

    using SafeMath for uint256;

    // DtsToken.sol과 상호작용 하기 위한 상태변수
    DtsToken public Dtoken; 

    // 플랫폼 거래 수수료 상태 변수
    uint256 private _Fee = 10;
    // 솔리디티는 소수점이 안되기 때문에 수수료 소수점을 표기해줄 상태 변수 하나를 설정한다.
    uint256 private constant _decimalPoint = 100;

    // 해당 음원이 현재까지 팔린 양 확인하기 위한 매핑
    mapping(uint256 => uint256) private _totalAmout;

    // 스트리밍권을 등록하는 매핑
    mapping (address => uint256) private _timeOwner;


    constructor(address DtsTokenCA){
        // 생성자에서 배포된 DtsToken CA를 받아서 Dtoken 상태변수에 저장한다.
        Dtoken = DtsToken(DtsTokenCA); 
    }

    // 구독권 구매 함수
    function subscriptionBuy(address account) public payable{
        // 사는 사람이 본인이 맞는지
        require(msg.sender == account, "Is it your wallet?");
        // 가지고 있는 구독권이 기간이 지났는지 확인 하는 함수 (처음 구매해도 기간이 0이기 때문에 살 수 있다.)
        require(_timeOwner[account] < block.timestamp, "There is already a subscription.");
        // 보낸 돈을 체크해준다. 1개월 3개월 6개월 중 하나여야지 통과
        require(msg.value == 0.5 ether || msg.value == 1 ether || msg.value == 2 ether);
        if(msg.value == 0.5 ether){
            _timeOwner[account] = block.timestamp + (8640 * 30);
        } else if(msg.value == 1 ether){
            _timeOwner[account] = block.timestamp + (8640 * 90);
        } else if(msg.value == 2 ether){
            _timeOwner[account] = block.timestamp + (8640 * 180);
        }
    }

    // 유저가 구독권을 가지고 있는지 확인하는 함수
    function streamingView(address account) public view returns(uint256) {
        return _timeOwner[account];
    }

    // ㅜ 펀딩 실패시 유저가 환불 받기 전에 컨트랙트 오너가 실행 시켜줘야 한다.
    // DtsToken.sol에게 SaleCA를 넘겨주기 위해서 사용하는데 컨트랙트 오너만 사용 가능하다.
    function changedCA() onlyOwner external{
        Dtoken.isChangedCA(address(this));
    }

    // 유저가 펀딩하는 함수
    function userFundding(uint256 tokenId, uint256 amount) public payable{
        // 해당 음원 크리에이터를 불러온다.
        address owner = Dtoken.getTokenOwnerData(tokenId).Creater;
        // 펀딩마감 시간이 지났는지 체크한다.
        require(Dtoken.getTokenOwnerData(tokenId).EndTime > block.timestamp, "Time Over");
        // 크리에이터가 자신의 음원 nft 사는지 체크한다.
        require(msg.sender != owner,"creater can't buy");
        // 보낸 금액이 0인지 체크한다.
        require(msg.value != 0, "have no money sent");
        // 보낸 금액이 유저가 사려고 하는 총 NFT 금액이랑 맞는지 체크한다.
        require(msg.value == (Dtoken.getTokenOwnerData(tokenId).UnitPrice * amount),"The price doesn't match.");
        // 해당 음원 크리에이터 nft 갯수를 체크한다. (구매하는 양이 보유양보다 많으면 안됨.)1번
        require(Dtoken.balanceOf(owner, tokenId) >=  amount, "can't buy things.");
        // 해당 음원 발행량이랑 지금까지 펀딩된 수랑 비교해서 오버되지 않게 체크한다.(구매하는 양이 발행량을 넘어가면 안됨.)2번
        require(Dtoken.getTokenOwnerData(tokenId).NftAmount - _totalAmout[tokenId] >= amount,"be out of stock and unable to buy goods");
        // 펀딩 신청을 할 때 saleCA에 권환을 넘겼는지 확인한다.
        require(Dtoken.isApprovedForAll(msg.sender,address(this)), "be not approved");
        // 지금까지 펀딩한 현재 금액을 모아 놓는다.
        _totalAmout[tokenId] = _totalAmout[tokenId] + amount;
        Dtoken.safeTransferFrom(owner, msg.sender, tokenId, amount, "");
        // 마지막 물량이 다 팔리면 Dtoken._tokenOwners[tokenId].isSuccess를 false에서 true로 바꾼다.
        if(_totalAmout[tokenId] == Dtoken.getTokenOwnerData(tokenId).NftAmount){
            Dtoken.isFunddingSuccess(tokenId);
        }
    }

    // 펀딩이 성공했을 때
    function isSuccessFundding(uint256 tokenId) public payable {
        // 펀딩 신청한 크리에이터 본인이 맞는지 확인
        require(msg.sender == Dtoken.getTokenOwnerData(tokenId).Creater, "Is that your wallet?");
        // 펀딩이 성공 했는지 확인
        require(Dtoken.getTokenOwnerData(tokenId).TotalPrice == (Dtoken.getTokenOwnerData(tokenId).UnitPrice * _totalAmout[tokenId]), "Funding seccess ?");
        // 수수료 값 구하기
        uint256 Payment = SafeMath.div(Dtoken.getTokenOwnerData(tokenId).TotalPrice.mul(_Fee),_decimalPoint);
        // 크리에이터가 수수료 뺴고 펀딩 성공시 받아가는 금액
        uint256 reFund = SafeMath.div(Dtoken.getTokenOwnerData(tokenId).TotalPrice.sub(Payment),2);
        // CA에서 크리에이터에게 금액 전달
        payable(msg.sender).transfer(reFund);
    }

    // 펀딩이 실패했을 때
    function isFuckingFundding(address account, uint256 tokenId) public payable {
        // 유저 본인이 맞는지 확인
        require(msg.sender == account, "Is that your wallet?");
        // 유저가 펀딩을 해서 nft를 가지고 있는지 확인
        require(Dtoken.balanceOf(msg.sender, tokenId) > 0, "Is it a buyer ?");
        // 펀딩 시간이 지났는지 확인
        require(Dtoken.getTokenOwnerData(tokenId).EndTime < block.timestamp, "Time Over ?");
        // 펀딩이 실패 했는지 확인
        require(Dtoken.getTokenOwnerData(tokenId).TotalPrice > (Dtoken.getTokenOwnerData(tokenId).UnitPrice * _totalAmout[tokenId]), "Funding failed ?");
        // 유저의 총 펀딩 금액
        uint256 reFund = Dtoken.balanceOf(msg.sender, tokenId) * Dtoken.getTokenOwnerData(tokenId).UnitPrice;
        // CA에서 유저에게 금액 전달
        payable(msg.sender).transfer(reFund);
        // 그 후 유저 nft 소각
        Dtoken.faildBurn(msg.sender, tokenId, Dtoken.balanceOf(msg.sender, tokenId));
    }

    // 현재 모금액 확인 함수
    function priceCheck(uint256 tokenId) public view returns(uint256){
        return _totalAmout[tokenId];
    }

    // 앞단에서는 이렇게 유저가 펀딩한 총 금액을 CA에 전송한다.
    //     await deployed.methods.buyFruit(appleBuy, bananaBuy, melonBuy).send({
    //     from : account,
    //     to : CA,
    //     value : web3.utils.toWei(c, "ether")
    // })
}