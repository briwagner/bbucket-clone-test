var expect    = require("chai").expect;

describe("tests are running", function() {
  it("compares a number", function() {
    let number = 4;
    expect(number).to.be.above(3)
  })
})