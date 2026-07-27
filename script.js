const textArray = ["Designer", "Web Developer"];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeText() {
    if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 150);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 100);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeText, 500);
    }
}

document.addEventListener("DOMContentLoaded", typeText);

// Contact form
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent Successfully!");
});
