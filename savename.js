const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
savename = document.querySelector(".js-savenames");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    panintSaveName(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function panintSaveName(text) {
    form.classList.remove(SHOWING_CN);
    savename.classList.add(SHOWING_CN);
    savename.innerText = `hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        panintSaveName(currentUser);

    }
}

function init() {
    loadName();
}

init();