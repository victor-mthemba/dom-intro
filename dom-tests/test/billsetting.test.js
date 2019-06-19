describe("The  bill setting", function(){

    it("should be able to return correct  call total if call is set and total", function(){
      var totalbill = TotalBill();

        totalbill.updateData(10,0,0,0);
        totalbill.add('call');
      assert.equal(10, totalbill.getTotal());
    });
    

    it("should be able to return correct  sms total if sms is set and total", function(){
      var totalbill = TotalBill();

        totalbill.updateData(0,20,0,0);
        totalbill.add('sms');
      assert.equal(20, totalbill.getTotal());
    });
    

    it("should be able to return correct  sms total if sms is set and  call total if call is set and total", function(){
      var totalbill = TotalBill();

        totalbill.updateData(15,25,0,0);
        totalbill.add('sms');
        totalbill.add('call');

      assert.equal(40, totalbill.getTotal());
    });


    it("should be able to return true  total is greater than  warning setting", function(){
      var totalbill = TotalBill();

        totalbill.updateData(5,5,15,0);
        totalbill.add('call');
        totalbill.add('sms');
        totalbill.add('call');
        totalbill.add('call');
        totalbill.getTotal();

      assert.equal(true, totalbill.checkWarning());
    });



});
