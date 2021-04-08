const nameFirstLast = "Dair Smith";
const age = 23;
const birthday = "April 15";
const detroitGC = false;
const lifeEvents = ["I was born in Oregon.", "I went to GRCC.", "I took Tae-Kwon-Do lessons as a kid.", "I am in the Javascript bootcamp."];

if (detroitGC === true) {
    console.log("My name is " + nameFirstLast + " and I am a student at Grand Circus in Detroit, Michigan. I am currently " + age + " years old and my birthday is on " + birthday + ".");
} else {
    console.log("My name is " + nameFirstLast + " and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently " + age + " years old and my birthday is on " + birthday + ".");
}

for (i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
    randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber !== 5) {
        counter++;
        console.log(randomNumber + " !== 5");
    } else {
        counter++;
        console.log(randomNumber + " === 5. It took " + counter + " iterations to randomly generate the number 5.")
        break;
    }
}