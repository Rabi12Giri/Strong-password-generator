let pass_generator = document.getElementById("button");
let pass_container = document.getElementById("password-container");
let container = document.getElementById("container");
let history1 = document.getElementById("history");

const Alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const smallAlphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const Strings = ["$", "!", "@", "%", "^", "&", "*", "(", ")"];

// const JoinedArrays = Numbers.concat(Alphabets, Strings, smallAlphabets); //.join("")
const JoinedArrays = [...Alphabets, ...Numbers, ...Strings, ...smallAlphabets];
console.log(JoinedArrays);

// function to generate password
let randomText;
function generatePasswords() {
  let randomText = "";

  for (let i = 0; i < 23; i++) {
    randomText += JoinedArrays[Math.floor(Math.random() * JoinedArrays.length)];
  }

  pass_container.innerHTML = randomText;
  // randomText = "";
  history1.innerHTML = randomText;

  container.innerHTML = "Password generated";
}

// function to clear generated passwords
function clearAll() {
  pass_container.innerHTML = "";
  randomText = "";
  container.innerHTML = "Cleared";
}
