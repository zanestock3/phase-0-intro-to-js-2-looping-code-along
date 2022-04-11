const names = ("Charlie", "Samip", "Ali");
const event = ("surprise");

function writeCards(names, event) {
    const newArray = []
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    debugger;
    }
    return newArray;
}

writeCards();

function countDown() {
    let countDown = 10;
    while (countDown >=0) {
        console.log(countDown--);
    }
}
