// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// import "../node_modules/openzeppelin-solidity/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
// import "../node_modules/openzeppelin-solidity/contracts/token/ERC1155/ERC1155.sol";
// import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// 상속만 받으면 배포 진행할때 owner 상태변수에 컨트랙트 배포자의 EOA 계정이 담긴다.

contract DtsToken is ERC1155, Ownable{

    // // json metadata URI;
    // string public metadataURI;

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
    }

    // SaleCA를 담는 상태변수
    address private _saleCA;

    // 해당 음원의 최초발행자인 크리에이터 주소, 목표 금액, 발행량, NFT펀딩 가격, 펀딩 기간을 구조체로 담아 놓는 매핑
    mapping(uint256 => tokenOwnerData) private _tokenOwners;

    constructor() ERC1155(""){
    

    }

    event seccessFundding(string result);

    // 보유한 nft 확인
    function balanceOf(address account, uint256 tokenId) public view override returns (uint) {
        return ERC1155.balanceOf(account, tokenId);
    }

    function balanceOfBatch(address[] memory account, uint256[] memory tokenId) public view override returns (uint256[] memory) {
        return ERC1155.balanceOfBatch(account, tokenId);
    }
    
    // 펀딩 시작 NFT 제작 및 권한 승인
    // msg.sender는 그 함수를 실행하는 자체가 되기 때문에 CA가 될 수도 있고 함수를 실행하는 사람이 될 수도 있다.
    function mintFundding(address creater, address saletokenCA, uint256 tokenId, uint256 amount, uint256 totalPrice, uint256 getTime) public{
        // nft 무한 발행을 막는 조건
        require(_tokenOwners[tokenId].NftAmount == 0, "have already been issued");
        // 크리에이터 본인이 실행 했는지 확인한다.
        require(creater == msg.sender, "It's not you.");
        // 이미 mint가 됐는지 확인해주는 조건 걸어주기..1월25일에 해놓기 추가 발행이되면 안되기 때문에 
        string memory result = "fundding is seccess";
        

        // 크리에이터 펀딩 신청한 내용을 담는다.
        tokenOwnerData memory data = _getFunddingData(creater,amount,totalPrice,getTime);
        // 담은 데이터를 해당 음원 Id에 저장한다.
        _tokenOwners[tokenId] = data;
        // 바로 nft 생성
        ERC1155._mint(creater, tokenId, amount, "");
        // 해당 계정의 NFT 권한을 CA에게 넘겨준다.
        ERC1155.setApprovalForAll(saletokenCA, true);
        // mintFundding 이벤트 실행
        emit seccessFundding(result);
    }

    // 크리에이터 음원 펀딩 정보 담아주는 함수
    function _getFunddingData(address _creater, uint256 _amount, uint256 _totalPrice, uint256 _getTime) private view returns(tokenOwnerData memory){
        tokenOwnerData memory data;
        uint256 _unitPrice = (_totalPrice * (10 ** 18)) /  _amount;
        data.Creater = _creater;
        data.NftAmount = _amount;
        data.TotalPrice = _totalPrice *(10 ** 18);
        data.UnitPrice = _unitPrice;
        data.EndTime = block.timestamp + (8640 * _getTime);
        
        return data;
    }
    
    // 해당음원의 creater를 조회하는 함수
    function getTokenOwnerDataCreater(uint256 tokenId) public view returns (address) {
        return _tokenOwners[tokenId].Creater;
    }
    // 해당음원의 발행량를 조회하는 함수
    function getTokenOwnerDataNftAmount(uint256 tokenId) public view returns (uint256) {
        return _tokenOwners[tokenId].NftAmount;
    }
    // 해당음원의 목표 금액을 조회하는 함수
    function getTokenOwnerDataTotalPrice(uint256 tokenId) public view returns (uint256) {
        return _tokenOwners[tokenId].TotalPrice;
    }
    // 해당음원의 개당 펀딩 가격을 조회하는 함수
    function getTokenOwnerDataUnitPrice(uint256 tokenId) public view returns (uint256) {
        return _tokenOwners[tokenId].UnitPrice;
    }
    // 해당음원의 펀딩 기간을 조회하는 함수
    function getTokenOwnerDataEndTime(uint256 tokenId) public view returns (uint256) {
        // ㅜ 나중에 거버넌스 토큰 투표로 상태를 바꿀 때 사용할 거
        // _tokenOwners[tokenId].EndtTime = _tokenOwners[tokenId].EndtTime + 3000;
        return _tokenOwners[tokenId].EndTime;
    }

    // 소각 시키는 함수.(saleOnly 함수 제어자를 사용함으로서 SaleCA만 동작 시킬 수 있다. )
    function faildBurn(address account, uint256 tokenId, uint256 amount) public saleOnly{
        ERC1155._burn(account, tokenId, amount);
    }

    // 컨트랙트 오너가 사용하면 SaleCA를 받아와 담아준다. (saleOnly 함수 제어자를 사용하기 위해서 씀.)
    function isChangedCA(address account) external{
        _saleCA = account;
    }                                                                                           

    // 실행시킨 주체가 SaleCA인지 확인하는 함수 제어자
    modifier saleOnly() {
        require(msg.sender == _saleCA);
        _;
    }

    // // URI 변경할 수 있는데 컨트랙트 오너만 가능하다.
    // function setURI(string memory newuri) public onlyOwner {
    //     _setURI(newuri);
    // }
}