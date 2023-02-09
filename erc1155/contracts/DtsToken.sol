// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC1155/ERC1155.sol";
import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
// import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

import "./FunddingToken.sol";

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

    struct votindata{
        // 투표한 사람
        address account;
        // 투표수
        uint256 votinAmount;
        // 찬성 반대
        // bool chan
    }

    // 유저가 보유하고 있는 nft 확인 방법
    // ids[] 값 민팅할 때마다 저장. 배열에 저장한 값을 가지고 앞단에서 알아서 balance체크한다. 
    uint256[] public ids;

    // FunddingTokenCA를 담는 상태변수
    address private _funddingCA;

    FunddingToken public Ftoken;

    // 해당 음원의 최초발행자인 크리에이터 주소, 목표 금액, 발행량, NFT펀딩 가격, 펀딩 기간을 구조체로 담아 놓는 매핑
    mapping(uint256 => tokenOwnerData) public tokenOwners;

    // 거버넌스 투표자 확인
    mapping(uint => mapping(address => bool)) public voting;

    // 거버넌스 투표 기간
    mapping (uint => uint) public votingTime;

    // 펀딩 성공 이벤트 선언
    event seccessFundding(address account, uint256 tokenId, uint256 amount, uint256 totalPrice, uint256 getTime, string result);

    // 보유한 nft 확인
    function balanceOf(address account, uint256 tokenId) public view override returns (uint) {
        return ERC1155.balanceOf(account, tokenId);
    }

    // 지금까지 펀딩신청 된 nft tokenId 저장한 거 보여주는 함수
    function idsView() public view returns(uint256[] memory){
        return ids;
    }
    
    // 펀딩 시작 NFT 제작 및 권한 승인
    // msg.sender는 그 함수를 실행하는 자체가 되기 때문에 CA가 될 수도 있고 함수를 실행하는 사람이 될 수도 있다.
    function mintFundding(address account, address funddingTokenCA, uint256 tokenId, uint256 amount, uint256 totalPrice, uint256 getTime) public{
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
        data.EndTime = block.timestamp + (60 * _getTime);
        data.isSuccess = false;
        
        return data;
    }

    // 거버넌스 투표 참여 함수
    function getvoting(uint256 tokenId, bool ) public {

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

    // 유저는 판매하기전에 이 함수를 통해서 saleToken에게 판매 권한을 부여한다.
    function saleApprovalTrue(address saleCA) public{
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

    // 컨트랙트 오너가 사용하면 FunddingTokenCA를 받아와 담아준다. (FunddingOwnerOnly 함수 제어자를 사용하기 위해서 씀.)
    function isChangedCA(address account) external {
        require(account == msg.sender,"????");
        require(_funddingCA == address(0),"Run once only in the beginning");
        _funddingCA = account;
        // 생성자에서 배포된 FunddingToken CA를 받아서 Ftoken 상태변수에 저장한다.
        Ftoken = FunddingToken(account);
    }

    // 실행시킨 주체가 SaleCA인지 확인하는 함수 제어자
    modifier FunddingOwnerOnly() {
        require(msg.sender == _funddingCA);
        _;
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