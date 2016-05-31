var powTest = require('../js/testPow.js');

describe("Powtest", function() {
    
  it("pow(2,0)", function() {
    var res;
    res = powTest.pow(2,0);
    expect(res).toBe(1);    
  }); 
  
  it("pow(2,2)", function() {
    var res;
    res = powTest.pow(2,2);
    expect(res).toBe(4);    
  }); 
  
  it("pow(2,-2)", function() {
    var res;
    res = powTest.pow(2,-2);
    expect(res).toBe(0.25);
    
  });
  
});