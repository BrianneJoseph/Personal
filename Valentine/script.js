const messages = [
    "Sure ka na?",
    "Sure na sure??",
    "Ayaw mo talaga? :(",
    "Sige na pleaseeeee :(",
    "PLEASE PLEASE PLEASE",
    "Mamatay na lang aq",
    "Dedo na...",
    "Please - multo ni Bri",
    "Noooooo :(",
    "*Sinuntok pader*"
];

const gifs = [
    "https://media.tenor.com/5Yw-HsEpHbwAAAAi/tonton-tonton-friends.gif",
    "https://media.tenor.com/juXo40KSNYYAAAAi/tonton-tontonfriends.gif",
    "https://i.giphy.com/BhRNXjTlP0IdQp25cd.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExam1sOGVwd2s4cnRmNnZ6NTFjdTRkZDRzeDhwcTJtd3FsbDR3NGVxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/K0GQURCx7hnie2VfPZ/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3kzZTdjODBkaG9ocXI1ejU0aDNlazg4ZzdyNXExd3M4cHoxcWN2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6OiRbQEaNwhe7EE7lE/giphy.gif"
];



let messageIndex = 0;
let gifIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gif = document.querySelector(".gif_container img");

    // Change "No" button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Change GIF
    gif.src = gifs[gifIndex];
    gifIndex = (gifIndex + 1) % gifs.length;

    // Make "Yes" button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
