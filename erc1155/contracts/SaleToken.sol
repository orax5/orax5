// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../node_modules/openzeppelin-solidity/contracts/utils/math/SafeMath.sol";
// import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "./DtsToken.sol";

contract SaleToken{

    using SafeMath for uint256;

    // DtsToken.sol과 상호작용 하기 위한 상태변수
    DtsToken public Dtoken;

    constructor(address DtsTokenCA){
        // 생성자에서 배포된 DtsToken CA를 받아서 Dtoken 상태변수에 저장한다.
        Dtoken = DtsToken(DtsTokenCA);
        // 배포할 때 처음 한번 Dtoken에게 FunddingTokenCA를 전달해준다.
        // DtsToken에서도 SaleToken이랑 상호작용을 하기 위해서
        Dtoken.isSaleCA(address(this));
    }

    // 판매하는 nft 정보를 담는 구조체
    struct SaleTokenInfo{
        // 판매자 계정
        address account;
        // 판매 수량
        uint256 amount;
        // 판매 가격
        uint256 price;
        // 판매 리스트 Id (해당 음원을 판매 등록하면 id가 생성된다.)
        uint256 listId;
    }

    // 판매 리스트 음원id 기준으로 몇개 등록 되었는지 확인하는 매핑
    mapping (uint256 => uint256) public saleNumber;

    // 판매하는 음원Id 기준으로 판매하는 사람의 주소로 판매 정보를 담아놓는 매핑
    mapping (uint256 => mapping (uint256 => SaleTokenInfo)) public saleTokenList;

    // // 판매중인 전체 리스트를 담는 배열형태의 상태 변수 
    // SaleTokenInfo[] private saleTokenList;

    // 판매 등록 이벤트 
    event SaleEvent(address account, uint256 tokenId, uint256 amount, uint256 price);
    // 판매 취소 이벤트
    event CancelEvent(address account, uint256);
    // 구매 이벤트
    event purchaseTokenEvnet(address owner, address account, uint256 tokenId, uint256 amount, uint256 price);

    // 판매 등록 함수
    function salesToken(address account, uint256 tokenId ,uint256 amount, uint256 price) public isSaleError(account,tokenId){
        // // 판매하려는 갯수가 본인이 가지고 있는 갯수를 넘지 않는지.
        // require(Dtoken.balanceOf(account, tokenId) >= amount, "Please enter the exact quantity.");
        // // 판매 가격이 0보다 큰 값인지 확인
        // require(price > 0,"Please enter the correct price.");
        // // 판매 물량이 0보다 큰 값인지 확인
        // require(amount > 0,"Please enter the correct amount.");
        // // 판매 권한이 있는지 확인한다.
        // // require(Dtoken.isApprovedForAll(account,address(this)),"be not approved");
        // // 펀딩이 성공된 음원인지 확인
        // require(Dtoken.getTokenOwnerData(tokenId).isSuccess == true,"is Success?");

        bool result = false;
        for(uint256 i = 1; i <= saleNumber[tokenId]; i++){
            if(saleTokenList[tokenId][i].account == account){
                SaleTokenInfo memory data1 = _getFirstSalesTokenData(account, amount, price, i);
                saleTokenList[tokenId][i] = data1;
                result = true;
            }
        }
        if(result == false){
        saleNumber[tokenId] = saleNumber[tokenId] + 1;
        SaleTokenInfo memory data = _getSalesTokenData(account, tokenId, amount, price);
        saleTokenList[tokenId][saleNumber[tokenId]] = data;
        }
 
        emit SaleEvent(account, tokenId, amount, price);
    }

    // 판매 정보를 담아주는 함수
    function _getSalesTokenData(address _account,uint256 tokenId, uint256 _amount, uint256 _price) private view returns(SaleTokenInfo memory){
        SaleTokenInfo memory data;

        data.account = _account;
        data.amount = _amount;
        data.price = _price;
        data.listId = saleNumber[tokenId];

        return data;
    }
    // 초기 판매 정보를 담아주는 함수
    function _getFirstSalesTokenData(address _account, uint256 _amount, uint256 _price, uint256 i) private pure returns(SaleTokenInfo memory){
        SaleTokenInfo memory data;

        data.account = _account;
        data.amount = _amount;
        data.price = _price;
        data.listId = i;

        return data;
    }

    // 판매 취소 함수
    function cancelSalesToken(uint256 tokenId) public {
        uint256 saleNumberLength = saleNumber[tokenId];
        for(uint256 i = 0; i <= saleNumberLength; i++){
            if(saleTokenList[tokenId][i].account == msg.sender){
               saleTokenList[tokenId][i].amount = 0;
               saleTokenList[tokenId][i].price = 0;
            }
        }
        emit CancelEvent(msg.sender,tokenId);
    }

    // 음원 판매가 등록된 수 view 함수
    function saleNumberList(uint256 tokenId) public view returns(uint256){
        return saleNumber[tokenId];
    }

    // 해당 음원 판매 정보 view함수
    function getSalesTokenListAll(uint256 tokenId, uint256 saleNum) public view returns(SaleTokenInfo memory){
        return saleTokenList[tokenId][saleNum];
    }

    // 구매 함수
    function purchaseToken(address payable owner, uint256 tokenId, uint256 amount, uint256 listId) public payable {
        // // 본인 nft를 못 사게 막는다.
        // require(saleTokenList[tokenId][listId].account != msg.sender,"I can't buy myself.");
        // // 사려고 하는 갯수가 0보다 크고 판매 등록된 수량을 넘기지 않는지.
        // require(amount > 0 && amount <= saleTokenList[tokenId][listId].amount,"Check amount");
        // // 보낸 돈이 사려고하는 가격과 일치하는지 확인한다.
        // require((amount * saleTokenList[tokenId][listId].price) * (10 ** 18) == msg.value, "Check the money again.");
        // // 판매 권한이 있는지 확인한다.
        // require(Dtoken.isApprovedForAll(owner,address(this)),"be not approved");
        // 수수료 값 구하기 (10%임)
        uint256 Payment = SafeMath.div(msg.value.mul(10),100);
        // 판매자에게 수수료 빼고 판매 금액 전달.
        owner.transfer(msg.value - Payment);

        // 오너의 판매 정보 수정
        saleTokenList[tokenId][listId].amount = saleTokenList[tokenId][listId].amount - amount;

<<<<<<< HEAD
        DToken.safeTransferFrom(owner, msg.sender, tokenId, amount, "");
=======
        // Dtoken.safeTransferFrom(owner, msg.sender, tokenId, amount, "");
>>>>>>> AnJu
        // 구매 함수 이벤트
        emit purchaseTokenEvnet(owner, msg.sender, tokenId, amount, msg.value);
    }

    // 음원에 대한 중복 판매 등록 여부를 확인한다. 한번 등록했으면 amount는 0이 아니므로 다시 등록하려면 취소하고 등록해야 한다.
    modifier isSaleError(address account, uint256 tokenId) {
        for(uint256 i = 1; i <= saleNumber[tokenId]; i++){
            if(saleTokenList[tokenId][i].amount != 0 && saleTokenList[tokenId][i].account == account){
               revert("Cancel the sales order.");
            }
        }
        _;
    }

    // // 판매 취소 함수 << 수정 전 버전.. 배열로 했던 거
    // function cancelSalesToken(uint256 tokenId) public {
    //     for (uint256 i = 0; i < saleTokenList.length; i++) {
    //         if(saleTokenList[i].tokenId == tokenId && saleTokenList[i].account == msg.sender){
    //             saleTokenList[i] = saleTokenList[saleTokenList.length -1];
    //             saleTokenList.pop();
    //             delete _saleToken[tokenId][msg.sender];
    //         }
    //     }
    // }

    // // 해당 음원 전체 판매 정보 view함수 << 수정 전 배열로 했던 거
    // function getSalesTokenListAll(uint256 tokenId) public view returns(SaleTokenInfo[] memory){
    //     // 새로운 list라는 배열을 만들고 여기에 해당하는 id값을 가진 판매 정보만 담아서 내보낸다.
    //     SaleTokenInfo[] memory list = new SaleTokenInfo[](saleTokenList.length);
    //     uint256 a = 0;
    //     for (uint256 i = 0; i < saleTokenList.length; i++) {
    //         if(saleTokenList[i].tokenId == tokenId){
    //             list[a] = (saleTokenList[i]);
    //             a++;
    //         }
    //     }
    //     return list;
    // }

    // // 전체 배열 리스트에서 해당 판매 음원 정보 가져오는 함수 << 수정 전 배열로 했던 거 편하게 함수를 사용해서 판매 정보를 하나만 가져오는 함수였다..
    // function isSalesTokenList(address owner, uint256 tokenId) private view returns(SaleTokenInfo memory){
    //     SaleTokenInfo memory data;
    //     for (uint256 i = 0; i < saleTokenList.length; i++) {
    //         if(saleTokenList[i].tokenId == tokenId && saleTokenList[i].account == owner){
    //             data.account = saleTokenList[i].account;
    //             data.tokenId = saleTokenList[i].tokenId;
    //             data.amount = saleTokenList[i].amount;
    //             data.price = saleTokenList[i].price;
    //         }
    //     }
    //     return data;
    // }
}