let hours = prompt("Hours: ");
let wage = prompt("Wage: ");

if (hours > 40) {
    let pay = (40 * wage) + ((hours - 40) * (wage * 1.5));
    console.log(pay);
} else {
    let pay = (hours * wage);
    console.log(pay);
}