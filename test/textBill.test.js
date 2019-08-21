describe("The text bill", function(){

    it("should be able to return the correct Call cost if one call is made", function(){
      var theBill = TextBill();

      theBill.callMade();

      assert.equal("2.75", theBill.getCallCost());
    });


    it("should be able to return the correct Call cost if two calls are made", function(){
      var theBill = TextBill();

      theBill.callMade();
      theBill.callMade();

      assert.equal("5.50", theBill.getCallCost());
    });

    it("should be able to return the correct Call cost if no calls are made", function(){
      var theBill = TextBill();

      assert.equal("0.00", theBill.getCallCost());
    });


    it("should be able to return the correct Sms cost if one sms is sent", function(){
      var theBill = TextBill();

      theBill.smsMade();

      assert.equal("0.75", theBill.getSmsCost());
    });


    it("should be able to return the correct Sms cost if two smses are sent", function(){
      var theBill = TextBill();

      theBill.smsMade();
      theBill.smsMade();

      assert.equal("1.50", theBill.getSmsCost());
    });

    it("should be able to return the correct sms cost if no smses are sent", function(){
      var theBill = TextBill();

      assert.equal("0.00", theBill.getSmsCost());
    });

    it("should be able to return a the correct total cost", function(){
      var theBill = TextBill();

      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
    
      assert.equal("10.50", theBill.getTotalBill());
    });

    it("should be able to return a warning if the total Cost exceeds R30", function(){
      var theBill = TextBill();

      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
    
      assert.equal("warning", theBill.color());
    });



    it("should be able to return a danger if the total Cost exceeds R50", function(){
      var theBill = TextBill();

      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
      theBill.smsMade();
      theBill.callMade();
    
      assert.equal("danger", theBill.color());
    });

      

      
});