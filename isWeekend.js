//Write a JavaScript function to test whether a date is a weekend.

function isWeekend(date1){
    let dt = new Date(date1);

    if (dt.getDay() == 6 || dt.getDay() == 0) {
        return "weekend";
    }
    return "not a weekend";
}

console.log(isWeekend('Nov 15 2016'));
 console.log(isWeekend('Nov 16 2016'));
 console.log(isWeekend('Nov 17 2016'));
 console.log(isWeekend('Nov 18 2016'));
 console.log(isWeekend('Nov 19 2016'));
 console.log(isWeekend('Nov 20 2016'));
 console.log(isWeekend('Nov 21 2016'));