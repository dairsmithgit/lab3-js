let hours = prompt("Hours: ");
let wage = prompt("Wage: ");

if (hours > 40) {
  let pay = 40 * wage + (hours - 40) * (wage * 1.5);
  console.log(pay);
} else {
  let pay = hours * wage;
  console.log(pay);
}

/* cannot figure out how to carry pay from function above in this part so i declared
the example value I used to test for hours and wage above to show the equation works */
let millionaire = 0;
let weekCount = 0;
let pay = 550;

while (millionaire <= 1000000) {
    millionaire += pay;
    weekCount++;
    if (millionaire >= 1000000) {
        console.log("It took " + weekCount + " weeks to become a millionaire.");
        break;
    }
}
