function CalculateBill() {
    var billTotal = 0;

    function totalCost(string) {
        var items = string.split(',');
        billTotal = 0;
        for (var x = 0; x < items.length; x++) {
            if (items[x] === 'call') {
                billTotal += 2.75;
            }
            else if (items[x] === 'sms') {
                billTotal += 0.75;
            }
        }
    }


    function getCritical() {
        return billTotal >= 30;
    }

    function getWarning() {
        return billTotal >= 20;
    }


    function displayTotal(){
        return billTotal;
    }

    return {

        totalCost,
        getCritical,
        getWarning,
        total : displayTotal
    }
}
