const { expect } = require("chai");

describe("AddNumbers", async function () {
  let AddNumbersInstance;
  let test;

  before(async function () {
    const AddNumbers = await ethers.getContractFactory("AddNumbers");
    AddNumbersInstance = await AddNumbers.deploy();
  });

  it("should give the correct addition output", async function () {
    test = expect(await AddNumbersInstance.add(10, 10)).to.equal(20);
  });

  after(async function () {
    console.log(console.log(test));
  });
});
