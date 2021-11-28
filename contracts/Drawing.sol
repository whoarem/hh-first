// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Drawing is Ownable, ERC721PresetMinterPauserAutoId {
    constructor() ERC721PresetMinterPauserAutoId("Drawing", "DGW", "dwg") {}
}
