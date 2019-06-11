describe("The Text input bill", function(){

    it("should be able to return correct  call total if call is made and total", function(){
      var totalbill = totalBillTotal();

      totalbill.callCost('call');
      

      assert.equal("R 2.75", totalbill.totalCost());
    });


    
});
