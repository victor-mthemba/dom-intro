function TotalBill() {
    var callTotals = 0;
    var smsTotals = 0;
    var totalTwoS = 0;

    //settings
    var callCost = 0;
    var smsCost = 0;
    var warnLevel = 0;
    var critLevel = 0;

    function add (billType){
    
            if (billType === "call") {
                callTotals += callCost;
            }
            else if (billType === "sms") {
                smsTotals += smsCost;
            }
    }

    function updateData (call,sms,warn,crit) {
        callCost = Number(call);
        smsCost = Number(sms);
        warnLevel = Number(warn);
        critLevel = Number(crit);
    }

    function getTotal()
    {
        totalTwoS = smsTotals + callTotals
        return totalTwoS.toFixed(2);
    }

    function checkCritical(){
        return totalTwoS >= critLevel;
    }

    function checkWarning(){
        return totalTwoS >= warnLevel;
    }

    function getCallTotal(){
        return callTotals.toFixed(2);
    }

    function getSmsTotal(){
        return smsTotals.toFixed(2);
    }

    return {

        getTotal,
        updateData,
        add,
        checkCritical,
        checkWarning,
        getCallTotal,
        getSmsTotal, 

    }
}