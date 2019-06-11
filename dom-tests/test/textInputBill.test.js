describe("The Text input bill", function(){

    it("should be able to return correct  call total if call is made and total", function(){
      var totalbill = totalBillTotal();

      totalbill.callCost('call');
      

      assert.equal(2.75, totalbill.totalCost());
      assert.equal(2.75, totalbill.callCost())

    });

    it("should be able to return correct  call total if call is made and sms total and total", function(){
      var totalbill = totalBillTotal();

      totalbill.callCost('call');
      totalbill.smsCost('sms');
      
      

      assert.equal(3.50, totalbill.totalCost());
      assert.equal(2.75, totalbill.callCost());
      assert.equal(0.75, totalbill.smsCost());
    });

    it("should be able to return correct  sms total if call is made and total", function(){
      var totalbill = totalBillTotal();

      totalbill.smsCost('sms');
      

      assert.equal(0.75, totalbill.totalCost());
      assert.equal(0.75, totalbill.smsCost());

    });

    it("should be able to return correct zero for call total if  no call is made and no sms is sent sms total and total", function(){
      var totalbill = totalBillTotal();

      totalbill.callCost('');
      totalbill.smsCost('');
      
      

      assert.equal(0.00, totalbill.totalCost());
      assert.equal(0.00, totalbill.callCost());
      assert.equal(0.00, totalbill.smsCost());
    });


    it("should be able to return critical warning if total is greater or equal R 50.00", function(){
      var totalbill = totalBillTotal();

      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('sms');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      
      totalbill.totalCost()

      assert.equal(true, totalbill.Critical());
    });


    it("should be able to return warning if total is greater or equal R 30.00", function(){
      var totalbill = totalBillTotal();

      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      totalbill.callCost('call');
      
      totalbill.totalCost();

      

      assert.equal(true, totalbill.Warning());
    });


    
});
