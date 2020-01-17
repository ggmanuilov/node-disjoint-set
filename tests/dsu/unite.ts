// import DsuService from "../../server/services/DsuServiceRank";
import { expect } from "chai";
import "mocha";
import DsuServiceRank from "../../server/services/DsuServiceRank";

/**
 * https://www.chaijs.com/api/bdd/
 */
describe("Find empty in empty root test", () => {
  it("should return undefined", () => {
    const service = new DsuServiceRank();
    const result = service.find(10);
    expect(result).to.equal(null);
  });
});

describe("Populate tree and find test", () => {
  it("should return 10", () => {
    const service = new DsuServiceRank();

    // generate series of set [0] [1] [2] [3] [4]
    for (let i = 0; i < 5; i++) {
      service.make(i);
    }

    // unite assert that [0] [1,2] [3] [4]
    service.unite(1, 2);
    expect(service.isUnite(1, 2)).to.be.equal(1);
    expect(service.isUnite(0, 2)).to.be.equal(0);

    // unite assert that [0] [1,2,4] [3]
    service.unite(2, 4);
    expect(service.isUnite(1, 2)).to.be.equal(1);
    expect(service.isUnite(0, 2)).to.be.equal(0);
    expect(service.isUnite(0, 3)).to.be.equal(0);

    service.unite(0, 4);
    service.unite(3, 4);
    expect(service.isUnite(0, 2)).to.be.equal(1);
    expect(service.isUnite(1, 2)).to.be.equal(1);
    expect(service.isUnite(3, 2)).to.be.equal(1);
    expect(service.isUnite(4, 2)).to.be.equal(1);
  });
});
