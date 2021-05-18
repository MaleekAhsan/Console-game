let num = parseInt(prompt("Enter a maximum Number!!!"));
while (!num) {
    num = parseInt(prompt("Enter a Valid Number!!!"));

}
let target = parseInt(Math.floor(Math.random() * num) + 1);
let guess = prompt("Enter your Guess Number or Press q to Quit the Game!!!");
let attempt = 1;
while (parseInt(guess) !== target) {

    if (guess === "q")
        break;
    attempt++;

    if (guess > target) {
        guess = parseInt(prompt("Oh number is greater!"));
    }
    else {
        guess = parseInt(prompt("Oh number is short!"));
    }

}
if (guess == "q") {
    console.log("You Quit !")
}
else {
    console.log("You Won!!!")
    console.log("You took  " + attempt + " Attempts to guesss");

}
