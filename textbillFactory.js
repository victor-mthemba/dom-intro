function TextBill() {

    var callCost = 0;
    var smsCost = 0;
    var totalBill = 0;

    function calculate(theBill) {

        if(theBill === "call") {
            callCost += 2.75;
            totalBill += 2.75;
        }
        else if(theBill === "sms") {
            smsCost += 0.75;
            totalBill += 0.75;
        }
    }

    function getCallCost() {
        return callCost.toFixed(2);
    }

    function getSmsCost() {
        return smsCost.toFixed(2);
    }

    function getTotalBill() {
        return totalBill.toFixed(2);
    }

    function color() {
        if(totalBill > 30 && totalBill < 50) {
            return "warning";
        }
        else if(totalBill > 50) {
            return "danger";
        }
        return "";
    }

    return {
        getCallCost,
        getSmsCost,
        getTotalBill,
        color,
        calculate,
    }
}