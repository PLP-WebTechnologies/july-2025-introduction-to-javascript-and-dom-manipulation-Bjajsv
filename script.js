// =========================
// 🎯 Part 1: JavaScript Basics
// =========================

// Variable declaration & conditionals
let userName = "";
let userAge = 18; // example static age

if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// =========================
// ❤️ Part 2: JavaScript Functions
// =========================

// Function 1: Greet user from input
function greetUser() {
  const nameInput = document.getElementById("nameInput");
  userName = nameInput.value.trim();

  const message = userName
    ? `Hello, ${userName}! Welcome!`
    : "Please enter your name.";

  document.getElementById("greetingMessage").textContent = message;
}

// Function 2: Calculate total price including tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

console.log("Total with tax: $" + calculateTotal(100, 0.18)); // Sample use

// =========================
// 🔁 Part 3: JavaScript Loops
// =========================

// Loop Example 1: Countdown using while loop
function countdown() {
  let output = "";
  let i = 10;
  while (i > 0) {
    output += `Countdown: ${i}... \n`;
    i--;
  }
  output += "Blast off!";
  document.getElementById("countdownDisplay").textContent = output;
}

// Loop Example 2: forEach to list fruits
function showFruits() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  const listElement = document.getElementById("fruitList");
  listElement.innerHTML = ""; // clear previous list

  fruits.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    listElement.appendChild(li);
  });
}

// =========================
// 🌐 Part 4: DOM Interactions
// =========================

// DOM interaction 1: Updating content using user input → `greetUser()`
// DOM interaction 2: Creating elements dynamically → `showFruits()`
// DOM interaction 3: Updating content using loop → `countdown()`

