const DtsToken =    artifacts.require("DtsToken.sol");

describe.only("DtsTon", () => {
    let deployed; // 배포해서 테스트할 컨트랙트 객체
    
    it("deployed", async() => {
        deployed = await DtsToken.deployed();
    });

    it("fundding", async() => {
        await deployed.fundding()
    })
});