const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", //key
    SHOWING_CN = "showing"; //class name

function saveName(text) { //key는 USER_LS(currentUser), value는 입력된 text
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) { //입력을 멈추고 value를 paninGreeting, saveName에 전달
    event.preventDefault();
    const currentValue = input.value; //입력된 값을 value에 저장한 것이 currentValue
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() { //form을 보이게 하고 submit발생 시 handleSubmit을 호출
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) { //form에서 showing class를 없애고 h4를 드러낸 후 hello-입력된 value를 호출
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() { //ket와 value를 갖고 옴, 없으면 aks발동, 있으면 paint발동
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();