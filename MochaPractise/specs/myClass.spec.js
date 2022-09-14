var MyClass = require("../src/myClass.js");
var myObj = new MyClass();
var chai = require("chai");
var expect = chai.expect;
var sinon = require("sinon");

describe.skip("Test Suite", function () {

   // Usage of Chai Assertion Lib
   it("Test Add Method Functionality 2", () => {
      expect(myObj.add(null, 3)).to.be.equal(3);
   });



   //  Usage of Spy or Sinon Lib
   it("spy the add Method", () => {

      var spy = sinon.spy(myObj, "add");
      var arg1 = 10;
      var arg2 = 20;

      myObj.callAnotherFunction(arg1, arg2);

      // sinon.assert.calledOnce(spy);
      expect(spy.calledOnce).to.be.true;
      expect(spy.calledWith(arg1, arg2)).to.be.true;

   });


   it("spy the callback Method", () => {

      var callback = sinon.spy();
      myObj.callTheCallBackFunc(callback);
      expect(callback.calledOnce).to.be.true;
   });


   //Mocking
   //Mock a method if the method does not have any impact  
   // ont the calling method.
   // or if two methods are independent. 
   it("mock the sayHello Method", () => {

      var mock = sinon.mock(myObj);
      var expectation = mock.expects("sayHello");
      expectation.exactly(1);
      myObj.callMockMethod(10, 20);
      expectation.verify();
   });

   it("mock the sayHello1 Method", () => {

      var mock1 = sinon.mock(myObj);
      var expectation = mock1.expects("sayHello");
      expectation.exactly(1);

      var expectation1 = mock1.expects("sayHello1");
      expectation1.exactly(1);
      expectation1.withArgs("Hello");

      myObj.callMockMethod(10, 20);
      // expectation.verify();
      expectation1.verify();
   });

});

describe("Test Suite 2", function () {

   // Usage of Chai Assertion Lib
   it("Test Stub Add Method Functionality", () => {
      var stub = sinon.stub(myObj, "add");

      stub.withArgs(10, 20)
      .onFirstCall().returns(100)
      .onSecondCall().returns(200);

      // console.log(myObj.callStubMethod(10,20));
      expect(myObj.callStubMethod(10,20)).to.be.equal(100);
      expect(myObj.callStubMethod(10,20)).to.be.equal(200);
   });

});