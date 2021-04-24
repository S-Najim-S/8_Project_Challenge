const lenEL = document.getElementById("len");
const upperEL = document.getElementById("upper");
const lowerEL = document.getElementById("lower");
const numEL = document.getElementById("num");
const symbEL = document.getElementById("symb");
const generateBtn = document.getElementById("generate");
const myPass = document.getElementById("my-password");
const copyBtn = document.getElementById("copy");

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()_+=-";

function getLower() {
  return lowercase[Math.floor(Math.random() * uppercase.length)];
}

function getUpper() {
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getNumber() {
  console.log(number[Math.floor(Math.random() * number.length)]);

  return number[Math.floor(Math.random() * number.length)];
}

function getSymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePassword() {
  const passLen = lenEL.value;
  let password = "";

  if (upperEL.checked) {
    password += getUpper();
  }

  if (lowerEL.checked) {
    password += getLower();
  }

  if (numEL.checked) {
    password += getNumber();
  }

  if (symbEL.checked) {
    password += getSymbol();
  }

  for (let i = password.length; i < passLen; i++) {
    const p = generateP();

    password += p;
  }
  myPass.innerText = password;
}

function generateP() {
  const ps = [];
  if (upperEL.checked) {
    ps.push(getUpper());
  }

  if (lowerEL.checked) {
    ps.push(getLower());
  }

  if (numEL.checked) {
    ps.push(getNumber());
  }

  if (symbEL.checked) {
    ps.push(getSymbol());
  }

  if (ps.length === 0) {
    return "";
  }
  return ps[Math.floor(Math.random() * ps.length)];
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  const password = myPass.innerText;

  if (!password) {
    return;
  }
  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Password Copied");
});
