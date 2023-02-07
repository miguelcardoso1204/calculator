function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
let storedValue = "";
let currentEntry = "";
let display = document.getElementById("displayText");
display.innerHTML = 0;
let operator = "";

function operate(num1, num2, operator = "add") {

    if (num2 === "0" && operator === "divide") {
        alert("You can't divide by 0!");
        currentEntry = "";
    } else {


        //This if is to set default values for operator and num2, in case they were not input by the user
        if (num2 === "") {
            if (operator === "add" || operator === "subtract") {
                num2 = "0";
            } else if (operator === "multiply" || operator === "divide") {
                num2 = "1";
            }
        }


        num1 = Number(num1);
        num2 = Number(num2);

        let result = 0;
        if (operator == "add") {
            result = add(num1, num2);
        } else if (operator== "subtract") {
            result = subtract(num1, num2);
        } else if (operator == "multiply") {
            result = multiply(num1, num2);
        } else if (operator == "divide") {

            result = divide(num1, num2);
        }


        //This if makes it so that the display only displays a maximum of 10 characters
        if (result.toString().length > 10) {
            let numberOfNonDecimalCharacters = result.toFixed(0).toString().length
            result = result.toFixed(10 - numberOfNonDecimalCharacters);
        }

        storedValue = result;
        currentEntry = "";
        display.innerText = result;
    }
}

function setOperator(input = "add") {


    //This if is what allows for chaining operations and displaying their result without the need to press "="
    if (storedValue !== "" && currentEntry !== "") {
        operate(storedValue, currentEntry, operator);
    }


    if (input == "+") {
        operator = "add";
    } else if (input == "-") {
        operator = "subtract";
    } else if (input == "/") {
        operator = "divide";
    } else if (input == "*") {
        operator = "multiply";
    }

    

    //This if sets the stored value to the current entry, only if the stored value is empty. Because if it's not empty, we want to keep the value for future operations
    if (storedValue == "") {
        storedValue = currentEntry;
    }
    currentEntry = "";
}


function appendToEntry(input) {


    //This if is to check to weather a "." already exists in the currentEntry, if the user inputs it, and only add it if it doesn't exist
    if (input === ".") {
        let entryArray = currentEntry.split("");
        let dotAlreadyPresent = false;
        for (character in entryArray) {
            if (entryArray[character] === ".") {
                dotAlreadyPresent = true;
            }
        }
        if (!dotAlreadyPresent) {
            currentEntry += input;
            display.innerText = currentEntry;
        }
    } else {
        currentEntry += input;
        display.innerText = currentEntry;
    }
}

function reset() {
    storedValue = "";
    currentEntry = "";
    display.innerText = 0;
}

function deleteCharacter() {
    currentEntry = currentEntry.slice(0, currentEntry.length - 1);
    display.innerText = currentEntry;
}





document.getElementById("keyCE").addEventListener('click', () => reset());
document.getElementById("keyC").addEventListener('click', () => deleteCharacter());
document.getElementById("key+").addEventListener('click', () => setOperator("+"));
document.getElementById("key-").addEventListener('click', () => setOperator("-"));
document.getElementById("key7").addEventListener('click', () => appendToEntry(7));
document.getElementById("key8").addEventListener('click', () => appendToEntry(8));
document.getElementById("key9").addEventListener('click', () => appendToEntry(9));
document.getElementById("key/").addEventListener('click', () => setOperator("/"));
document.getElementById("key4").addEventListener('click', () => appendToEntry(4));
document.getElementById("key5").addEventListener('click', () => appendToEntry(5));
document.getElementById("key6").addEventListener('click', () => appendToEntry(6));
document.getElementById("key*").addEventListener('click', () => setOperator("*"));
document.getElementById("key1").addEventListener('click', () => appendToEntry(1));
document.getElementById("key2").addEventListener('click', () => appendToEntry(2));
document.getElementById("key3").addEventListener('click', () => appendToEntry(3));
document.getElementById("keyEqual").addEventListener('click', () => operate(storedValue, currentEntry, operator));
document.getElementById("key0").addEventListener('click', () => appendToEntry(0));
document.getElementById("key.").addEventListener('click', () => appendToEntry("."));


document.addEventListener('keydown', (event) => {
    var key = event.key;
    console.log(key);
    switch (key) {
        case "Delete":
            reset();
            break;
        case "Backspace":
            deleteCharacter();
            break;
        case "+":
            setOperator("+");
            break;
        case "-":
            setOperator("-");
            break;
        case "/":
            setOperator("/");
            break;
        case "*":
            setOperator("*");
            break;
        case "1":
            appendToEntry(1);
            break;
        case "2":
            appendToEntry(2);
            break;
        case "3":
            appendToEntry(3);
            break;
        case "4":
            appendToEntry(4);
            break;
        case "5":
            appendToEntry(5);
            break;
        case "6":
            appendToEntry(6);
            break;
        case "7":
            appendToEntry(7);
            break;
        case "1":
            appendToEntry(8);
            break;
        case "1":
            appendToEntry(9);
            break;
        case ".":
            appendToEntry(".");
            break;
        case "=":
            operate(storedValue, currentEntry, operator);
            break;
        case "Enter":
            operate(storedValue, currentEntry, operator);
            break;
    }
});