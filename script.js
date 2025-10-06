const text = "Xin chào, mình là Logit.net";
let index = 0;
const element = document.querySelector("header h1");
element.textContent = "";

function typeEffect() {
  if(index < text.length) {
    element.textContent += text[index];
    index++;
    setTimeout(typeEffect, 150);
  }
}

typeEffect();
