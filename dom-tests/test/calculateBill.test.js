describe("The calculate bill", function(){

    it("should be able to return correct total cost if sms is sent", function(){
      var totalbill = calculateBill();

      totalbill.totalCost('sms');
      

      assert.equal("R0.75", totalbill.totalCost());
    });


    it("should be able to return correct total cost if one sms is sent and  one call is made", function(){
        var totalbill = calculateBill();
  
        totalbill.totalCost('sms');
        totalbill.totalCost('call');
        
  
        assert.equal("R3.50", totalbill.totalCost());
      });

      it("should be able to return correct total cost if no sms is sent and  no call is made", function(){
        var totalbill = calculateBill();
  
        totalbill.totalCost('');
        totalbill.totalCost('');
        
  
        assert.equal("R0.00", totalbill.totalCost());
      });

      it("should be able to return correct total cost if  one call is made", function(){
        var totalbill = calculateBill();
  
        totalbill.totalCost('call');
        
  
        assert.equal("R2.75", totalbill.totalCost());
      });

      it("should be able to return critical warning if total is greater or equal R 30.00", function(){
        var totalbill = calculateBill();
  
        totalbill.totalCost('call');
        totalbill.totalCost('sms');
        totalbill.totalCost('call');
        totalbill.totalCost('call');
        totalbill.totalCost('sms');
        totalbill.totalCost('call');
        totalbill.totalCost('call');
        totalbill.totalCost('sms');
        totalbill.totalCost('call');
        totalbill.totalCost('call');
        totalbill.totalCost('sms');
        totalbill.totalCost('call');
        totalbill.totalCost('call');
        totalbill.totalCost('sms');
        totalbill.totalCost('call');
        totalbill.totalCost('call');
        totalbill.totalCost('sms');
        totalbill.totalCost('call');
  
        assert.equal(true, totalbill.getCritical());
      });


      it("should be able to return warning if total is greater or equal R 20.00", function(){
        var totalbill = calculateBill();
  
        totalbill.totalCost('call');
        totalbill.totalCost('sms');
        totalbill.totalCost('call');
        totalbill.totalCost('call');
        totalbill.totalCost('sms');
        totalbill.totalCost('call');
        totalbill.totalCost('call');
        totalbill.totalCost('sms');
        totalbill.totalCost('call');
        totalbill.totalCost('call');
        totalbill.totalCost('sms');
        
  
        assert.equal(true, totalbill.getWarning());
      });
});
