var billItemType = document.querySelector(".billItemTypeRadio");
var checkedRadioBtn = document.querySelector(".radioBillAddBtn");
var callsTotalElemRadio = document.querySelector(".callTotalTwo");
var smsTotalElemRadio = document.querySelector(".smsTotalTwo")
var totalCostElemRadio = document.querySelector(".totalTwo");

var instance = RadioBill();

var totalsElmOne = document.querySelector(".billTotalOne");
var templateOne = document.querySelector(".totalsTemplates").innerHTML;

var totalsTemplatesOne = Handlebars.compile(templateOne);
radioBillTotal();

function radioBillTotal(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    if (checkedRadioBtn) {
        billItemType = checkedRadioBtn.value;
        instance.calculateOne(billItemType);
    }

    var colorChange = instance.color();
    
    var templateDataOne = {
        callTotal: instance.getCallCost(),
        smsTotal: instance.getSmsCost(),
        total: instance.getTotalBill(),
        colorChange
    };

    var dataInTempOne = totalsTemplatesOne(templateDataOne);
    totalsElmOne.innerHTML = dataInTempOne;
}


 checkedRadioBtn.addEventListener('click', radioBillTotal);
