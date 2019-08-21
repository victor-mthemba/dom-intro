function RadioBill() {

    var callCostOne = 0;
    var smsCostOne = 0;
    var totalBillOne = 0;

    function calculateOne(theBill) {

        if(theBill === "call") {
            callCostOne += 2.75;
            totalBillOne += 2.75;
        }
        else if(theBill === "sms") {
            smsCostOne += 0.75;
            totalBillOne += 0.75;
        }
    }

    function getCallCost() {
        return callCostOne.toFixed(2);
    }

    function getSmsCost() {
        return smsCostOne.toFixed(2);
    }

    function getTotalBill() {
        return totalBillOne.toFixed(2);
    }

    function color() {
        if(totalBillOne > 30 && totalBillOne < 50) {
            return "warning";
        }
        else if(totalBillOne > 50) {
            return "danger";
        }
        return "";
    }

    return {
        getCallCost,
        getSmsCost,
        getTotalBill,
        color,
        calculateOne,
    }
}