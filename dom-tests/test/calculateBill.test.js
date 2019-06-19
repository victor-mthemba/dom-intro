describe("The calculate bill", function(){

    it("should be able to return correct total cost if sms is sent", function(){
      var totalbill = CalculateBill();

      totalbill.totalCost('sms');
      

      assert.equal("0.75", totalbill.total());
    });


    it("should be able to return correct total cost if one sms is sent and  one call is made", function(){
        var totalbill = CalculateBill();
  
        totalbill.totalCost('sms,call');
        
  
        assert.equal("3.50", totalbill.total());
      });

      it("should be able to return correct total cost if no sms is sent and  no call is made", function(){
        var totalbill = CalculateBill();
  
        totalbill.totalCost('');
        
  
        assert.equal("0.00", totalbill.total());
      });

      it("should be able to return correct total cost if  one call is made", function(){
        var totalbill = CalculateBill();
  
        totalbill.totalCost('call');
        
  
        assert.equal("2.75", totalbill.total());
      });

      it("should be able to return critical warning if total is greater or equal R 30.00", function(){
        var totalbill = CalculateBill();
  
        totalbill.totalCost('call,sms,call,sms,call,sms,call,sms,sms,call,sms,call,sms,call,sms,call,call,call,call,call,call,call');
  
        assert.equal(true, totalbill.getCritical());
      });


      it("should be able to return warning if total is greater or equal R 20.00", function(){
        var totalbill = CalculateBill();

        totalbill.totalCost('call,sms,call,call,sms,call,call,sms,call,call,call');
        assert.equal(true, totalbill.getWarning());
      });
});
