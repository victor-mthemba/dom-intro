function settingBill() 
{
    var callTotal = 0;
    var smsTotal = 0;
    var callCosts = 2.75;
    var smsCosts= 0.75;
    var total = 0;
    var criticalLvl = 20;
    var warningLvl = 10;

    function callCost(type)
    {
        if(type === 'call')
        {
            callTotal += callCosts;
        }
        return  callTotal.toFixed(2);
    }

    function smsCost(type)
    {
        if(type === 'sms')
        {
            smsTotal += smsCosts;
        }
        return  smsTotal.toFixed(2);
    }

    function totalCost()
    {
        total = callTotal + smsTotal;
        return total;
    }

    function Critical() 
    {
        return total >= criticalLvl;
    }

    function Warning()
    {
        return total >= warningLvl;
    }

    return {
        callCost,
        smsCost,
        totalCost,
        Critical,
        Warning,
    }
}