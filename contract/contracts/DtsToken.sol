// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC1155/ERC1155.sol";
import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";

// import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
// import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

import "./FunddingToken.sol";
import "./SaleToken.sol";

// 상속만 받으면 배포 진행할때 owner 상태변수에 컨트랙트 배포자의 EOA 계정이 담긴다.

contract DtsToken is ERC1155, Ownable{

    constructor() ERC1155(""){
    
    }

    // // json metadata URI;
    // string public metadataURI;

    // 처음 펀딩 정보를 담는 구조체 
    struct tokenOwnerData{
        // 크리에이터 주소
        address Creater;
        // nft 발행량
        uint256 NftAmount;
        // 펀딩 목표 금액;
        uint256 TotalPrice;
        // nft개당 펀딩 가격
        uint256 UnitPrice;
        // 펀딩 기간
        uint256 EndTime;
        // 펀딩 성공 여부
        bool isSuccess;
    }

    // 해당 음원 거버넌스 투표 정보 모아놓는 곳
    struct votingData{
        // 투표한 사람
        address account;
        // 투표수
        uint256 Amount;
        // 찬성 반대
        bool result;
    }
    
    // 거버넌스 신청 정보 모아놓는 곳
    struct votingDay{
        // 거버넌스 투표 기간
        uint256 time;
        // 성공시 늘릴 기간
        uint256 date;
    }
    
    // 유저가 보유하고 있는 nft 확인 방법
    // ids[] 값 민팅할 때마다 저장. 배열에 저장한 값을 가지고 앞단에서 알아서 balance체크한다. 
    uint256[] public ids;

    // FunddingTokenCA를 담는 상태변수
    address private _funddingCA;

    FunddingToken public Ftoken;

    // SaleTokenCA를 담는 상태변수
    SaleToken public Stoken;

    // 해당 음원의 최초발행자인 크리에이터 주소, 목표 금액, 발행량, NFT펀딩 가격, 펀딩 기간을 구조체로 담아 놓는 매핑
    mapping(uint256 => tokenOwnerData) public tokenOwners;

    // 거버넌스 투표
    mapping(uint256 => mapping(uint256 => votingData)) public voting;

    // 음원기준으로 현재까지 몇명 투표했는지 담는 매핑
    mapping (uint256 => uint256) public votingCount;

    // 거버넌스 투표 기간
    mapping (uint256 => votingDay) public votingDate;

    // 메타데이터 uri 넣어놓는 매핑
     mapping (uint256=>string) metadataURL;

    // 펀딩 성공 이벤트 선언
    event seccessFundding(address account, uint256 tokenId, uint256 amount, uint256 totalPrice, uint256 getTime, string result);

    // 보유한 nft 확인
    function balanceOf(uint256 tokenId) public view returns (uint) {
        return ERC1155.balanceOf(msg.sender, tokenId);
    }

    // 지금까지 펀딩신청 된 nft tokenId 저장한 거 보여주는 함수
    function idsView() public view returns(uint256[] memory){
        return ids;
    }
    

    // 펀딩 시작 NFT 제작 및 권한 승인
    // msg.sender는 그 함수를 실행하는 자체가 되기 때문에 CA가 될 수도 있고 함수를 실행하는 사람이 될 수도 있다.
    function mintFundding(address account, address funddingTokenCA, uint256 tokenId, uint256 amount, uint256 totalPrice, uint256 getTime, string memory metadata) public{
        // nft 무한 발행을 막는 조건
        require(tokenOwners[tokenId].NftAmount == 0, "have already been issued");
        // 크리에이터 본인이 실행 했는지 확인한다.
        require(account == msg.sender, "It's not you.");
        // 이벤트 안에 넣어줄 멘트
        string memory result = "fundding is seccess";
        
        // 크리에이터 펀딩 신청한 내용을 담는다.
        tokenOwnerData memory data = _getFunddingData(account,amount,totalPrice,getTime);
        // 담은 데이터를 해당 음원 Id에 저장한다.
        tokenOwners[tokenId] = data;
        // nft 생성
        ERC1155._mint(account, tokenId, amount, "");
        // 해당 계정의 NFT 권한을 CA에게 넘겨준다.
        ERC1155.setApprovalForAll(funddingTokenCA, true);
        ids.push(tokenId);

        // 메타데이터 uri 넣는 곳
        metadataURL[tokenId] = metadata;
        // mintFundding 이벤트 실행
        emit seccessFundding(msg.sender, tokenId, amount, totalPrice, getTime, result);
    }

    // 크리에이터 음원 펀딩 정보 담아주는 함수
    function _getFunddingData(address _account, uint256 _amount, uint256 _totalPrice, uint256 _getTime) private view returns(tokenOwnerData memory){
        tokenOwnerData memory data;
        uint256 _unitPrice = (_totalPrice * (10 ** 18)) /  _amount;
        data.Creater = _account;
        data.NftAmount = _amount;
        data.TotalPrice = _totalPrice *(10 ** 18);
        data.UnitPrice = _unitPrice;
        data.EndTime = block.timestamp + (86400 * _getTime);
        data.isSuccess = false;
        
        return data;
    }

    // 거버넌스 신청 함수
    function startVoting(uint256 tokenId, uint256 date, uint256 changeDay) public{
        // nft를 보유하고 있는 사람만 신청 할 수 있다.
        require(ERC1155.balanceOf(msg.sender, tokenId) != 0, "no amount.");
        // 투표기간은 펀딩이 끝나기 하루전까지가 최대
        require(block.timestamp * date > tokenOwners[tokenId].EndTime - 86400,"The voting period is maximum until one day before.");
        // 거버넌스 투표 신청은 한번만 가능
        require(votingDate[tokenId].time == 0, "There is already a vote.");
        
        votingDate[tokenId].time = block.timestamp + (86400 * date);
        votingDate[tokenId].date = changeDay;
    }

    // 거버넌스 투표 참여 함수
    function isVoting(uint256 tokenId, bool governance) public{
        // nft 보유하고 있는지 확인
        require(ERC1155.balanceOf(msg.sender, tokenId) != 0, "no amount");
        // 거버넌스 투표 기간이 지났는지 확인
        require(block.timestamp <= votingDate[tokenId].time, "Time Out" );
        // 크리에이터가 투표하는지 확인(크리에이터는 투표 불가능)
        require(tokenOwners[tokenId].Creater != msg.sender, "Creators are not allowed to participate");
        uint256 amount = ERC1155.balanceOf(msg.sender,tokenId);
        bool result = false;
        for(uint256 i = 1; i <= votingCount[tokenId]; i++){
            if(voting[tokenId][i].account == msg.sender){
                voting[tokenId][i] = votingData({account : msg.sender, Amount : amount, result : governance});
                result = true;
            }
        }
        if(result == false){
        votingCount[tokenId] = votingCount[tokenId] + 1;
        voting[tokenId][votingCount[tokenId]] = votingData({account : msg.sender, Amount : amount, result : governance});
        }
    }

    // 거버넌스 투표가 끝나고 실행하는 함수 (투표기간이 지나야지만 거버넌스 결과 함수 실행이 된다. 결과 버튼은 누구든 해당 nft를 보유하고 있으면 누를 수 있다.)
    function endVoting(uint256 tokenId, bool result) public{
        // 거버넌스 투표 기간이 지났는지 확인 
        require(votingDate[tokenId].time < block.timestamp,"Time Out?");
        // nft 보유하고 있는지?
        require(ERC1155.balanceOf(msg.sender, tokenId) != 0, "no amount");
        // 펀딩이 이미 끝났는지
        require(tokenOwners[tokenId].isSuccess != true,"end Fundding?");

        if(result == true){
        tokenOwners[tokenId].EndTime = tokenOwners[tokenId].EndTime + (86400 * votingDate[tokenId].date);
        }
    }

    // 거버넌스 투표 기간 조회 함수
    function getVotingDate(uint256 tokenId)public view returns(uint256){
        return votingDate[tokenId].time;
    }
    // 현재까지 몇명 투표 했는지 조회 함수
    function getVotingCount(uint256 tokenId) public view returns(uint256){
        return votingCount[tokenId];
    }
    // 투표 조회 함수(address amount result)
    function getVoting(uint256 tokenId, uint256 votingNum) public view returns(votingData memory){
        return voting[tokenId][votingNum];
    }
    
    // 음원 초기정보 전체 조회하는 함수
    function getTokenOwnerData(uint256 tokenId) public view returns(tokenOwnerData memory){
        return tokenOwners[tokenId];
    }

    // 유저가 펀딩 신청하고 펀딩이 성공했으면 성공 여부를 true;
    function isFunddingSuccess(uint256 tokenId) external{
        require(ERC1155.balanceOf(tokenOwners[tokenId].Creater, tokenId) == 0, "Is it sold out?");
        require(Ftoken.priceCheck(tokenId) == tokenOwners[tokenId].NftAmount);
        tokenOwners[tokenId].isSuccess = true;
    }
    // 유저가 펀딩 신청하고 펀딩이 아직 성공 안 했으면 성공 여부를 false;
    function isFunddingFalsed(uint256 tokenId) external{
        require(ERC1155.balanceOf(tokenOwners[tokenId].Creater, tokenId) > 0, "Is it not sold out?");
        require(Ftoken.priceCheck(tokenId) != tokenOwners[tokenId].NftAmount);
        tokenOwners[tokenId].isSuccess = false;
    }

    // saleToken 판매등록 함수를 Dtoken에서 사용함.(권한부여를 따로 주면 가스비가 중복으로 들기 때문에)
    // 유저는 판매하기전에 이 함수를 통해서 saleToken에게 판매 권한을 부여한다.
    function isSalesToken(address saleCA, uint256 tokenId, uint256 amount, uint256 price) public{
        Stoken.salesToken(msg.sender, tokenId, amount, price);
        // saleCA에게 권한 넘겨주기
        ERC1155.setApprovalForAll(saleCA, true);
    }

    // saleToken에게 판매 권한 취소 함수
    function saleApprovalFalse(address saleCA) public{
        ERC1155.setApprovalForAll(saleCA, false);
    }

    // 소각 시키는 함수.(FunddingOwnerOnly 함수 제어자를 사용함으로서 SaleCA만 동작 시킬 수 있다. )
    function faildBurn(address account, uint256 tokenId, uint256 amount) external FunddingOwnerOnly{
        ERC1155._burn(account, tokenId, amount);
    }

    // FunddingToken컨트랙트에서 생성자 함수를 사용해서 처음에 배포하면이 함수를 실행 시킨다.  (FunddingOwnerOnly 함수 제어자를 사용하기 위해서 씀.)
    function isFunddingCA(address account) external {
        require(account == msg.sender,"FunddingCA????");
        require(_funddingCA == address(0),"Run once only in the beginning");
        _funddingCA = account;
        // 생성자에서 배포된 FunddingToken CA를 받아서 Ftoken 상태변수에 저장한다.
        Ftoken = FunddingToken(account);
    }

    // FunddingToken컨트랙트에서 생성자 함수를 사용해서 처음에 배포하면이 함수를 실행 시킨다. saleCA를 담아서 상호작용을 하기 위해서
    function isSaleCA(address account) external {
        require(account == msg.sender,"SaleCA????");
        // 생성자에서 배포된 SaleToken CA를 받아서 Stoken 상태변수에 저장한다.
        Stoken = SaleToken(account);
    }

    // 실행시킨 주체가 SaleCA인지 확인하는 함수 제어자
    modifier FunddingOwnerOnly() {
        require(msg.sender == _funddingCA);
        _;
    }

    // 메타데이터 view함수
    function tokenURI(uint256 tokenId)public view returns(string memory){
        return metadataURL[tokenId];
    }

    // // URI 변경할 수 있는데 컨트랙트 오너만 가능하다.
    // function setURI(string memory newuri) public onlyOwner {
    //     _setURI(newuri);
    // }
    // // nft json 설정
    // function tokenURI(uint _tokenId) public override view returns (string memory) {
    //     return string(abi.encodePacked(metadataURI, '/', Strings.toString(_tokenId), '.json'));
    // }
}