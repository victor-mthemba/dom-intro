var billTypeTextElem = document.querySelector(".billTypeTexts");
var textTotalAddBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne")
var totalCostElem = document.querySelector(".totalOne");

var instance = TextBill();

var totalsElm = document.querySelector(".billTotals");
var template = document.querySelector(".totalsTemplates").innerHTML;

var totalsTemplates = Handlebars.compile(template);
textBillTotal();

function textBillTotal(){

    instance.calculate(billTypeTextElem.value);
    var colorChange = instance.color();

    var templateData = {
        callTotal: instance.getCallCost(),
        smsTotal: instance.getSmsCost(),
        total: instance.getTotalBill(),
        colorChange
    };

    var dataInTemp = totalsTemplates(templateData)

    totalsElm.innerHTML = dataInTemp;

}

textTotalAddBtn.addEventListener('click', textBillTotal);