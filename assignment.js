
// kilometer to meter ::

function kilometerToMeter(kilometer){
    if(kilometer < 0){
        var showErortext = "Input invalid";
        return showErortext;
    }
    var meter = kilometer * 1000;
    return meter;
}
console.log(kilometerToMeter(6));


// mega friend ::

var arr = ["Rafiq", "safiq", "jabbar", "kamal"];

function megaFriend(arr) {
    var max = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }
    return max;
}
console.log(megaFriend(arr));

// hotel cost ::

function hotelCost(Days) {
    if(Days <= 0 ){
        var showErortext = 'Hotel is not available';
        return showErortext;
    }
    var cost = 0;
    if (Days <= 10) {
        cost = Days * 100;
    }
    else if (Days <= 20) {
        var firstPart = 10 * 100;
        var remaining = Days - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = Days - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
console.log (hotelCost(20));




// budgetCalculator ::

function budgetCalculator(watch, phone, laptop) {

    if (watch < 0 || phone < 0 || laptop < 0) {
        var showErortext = "Input is not valid";
        return showErortext;
    }
    var watchPrice = 50;
    var totalWatchCost = watchPrice * watch;

    var phonePrice = 100;
    var totalPhoneCost = phonePrice * phone;

    var laptopPrice = 500;
    var totalLaptopCost = laptopPrice * laptop;

    totalBudget = (totalWatchCost + totalPhoneCost + totalLaptopCost);

    return totalBudget;
}
console.log(budgetCalculator(4, -1, 2));




