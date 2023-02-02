const DtsToken = artifacts.require("DtsToken");
// const FunddingToken = artifacts.require("FunddingToken");
// const SaleToken = artifacts.require("SaleToken");

module.exports = async function (deployer) {
  // DtsToken 배포 진행
  await deployer.deploy(DtsToken);
  const Dts = await DtsToken.deployed();
  // FunddingToken 배포 진행
  // Dts.address // 배포된 컨트랙트의 CA 값이 가져와짐
  //   await deployer.deploy(FunddingToken, Dts.address);
  // SaleToken 배포 진행
  // Dts.address // 배포된 컨트랙트의 CA 값이 가져와짐
  //   await deployer.deploy(SaleToken, Dts.address);
};
