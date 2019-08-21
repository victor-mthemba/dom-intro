function CalculateBill() {
    var billTotal = 0;

    function totalCost(string) {
        var items = string.split(',');
        billTotal = 0;
        for (var x = 0; x < items.length; x++) {
            var itemArray = items[x].trim();
            if (itemArray === 'call') {
                billTotal += 2.75;
            }
            else if (itemArray === 'sms') {
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
        return billTotal.toFixed(2);
    }

    return {

        totalCost,
        getCritical,
        getWarning,
        total: displayTotal,
    }
}
