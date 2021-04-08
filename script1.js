let hours = prompt("Hours: ");
let wage = prompt("Wage: ");

if (hours > 40) {
    let pay = (40 * wage) + ((hours - 40) * (wage * 1.5));
    console.log(pay);
} else {
    let pay = (hours * wage);
    console.log(pay);
}

/*

DID NOT WORK - function seems exponential because it is adding
1 * pay + 2 * pay etc until 1 million

let millionaire = 0;
let weekCount = 0;

while (millionaire <= 1000000) {
    millionaire += (pay * weekCount);
    weekCount++;
    if (millionaire >= 1000000) {
        console.log("It took " + weekCount + " weeks to become a millionaire.");
        break;
    }
}
*/