var billTypeTextElem = document.querySelector(".billTypeTexts");
var textTotalAddBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne")
var totalCostElem = document.querySelector(".totalOne");

var instanceForText = TextBill();

var totalsElm = document.querySelector(".billTotals");
var template = document.querySelector(".totalsTemplates").innerHTML;

var totalsTemplates = Handlebars.compile(template);
textBillTotal();
textTotalAddBtn.addEventListener("click", function () {
let showValue = billTypeTextElem.value;
console.log(showValue);

    instanceForText.calculated(showValue);
    textBillTotal()
})

function textBillTotal() {

    var colorChange = instanceForText.color();

    var templateData = {
        callTotal: instanceForText.getCallCost(),
        smsTotal: instanceForText.getSmsCost(),
        total: instanceForText.getTotalBill(),
        colorChange
    };

    var dataInTemp = totalsTemplates(templateData)

    totalsElm.innerHTML = dataInTemp;

}

// textTotalAddBtn.addEventListener('click', textBillTotal);