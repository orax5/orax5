// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract hi {
    mapping (address => uint256) public timeOwner;

    function tommorow()public view returns(uint256){
        return block.timestamp+86400;
    }
    
    function _now()public view returns(uint256){
        return block.timestamp;
    }
    
    function _timecheck()public view returns(bool){
        if(block.timestamp > 1555555555){return false;}
        else return true;
    }

    function _firstbuy(address _to,uint256 _time) public {
        if(timeOwner[_to] > block.timestamp){
        timeOwner[_to] = timeOwner[_to]  + _time;
        }
        else if(timeOwner[_to]<block.timestamp){
            timeOwner[_to] = block.timestamp+_time;
        }
    }
}

// 1674303575 / 1676895561