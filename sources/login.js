const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add("hidden");
  console.log(username);
  greeting.classList.remove("hidden");

  greeting.innerText = `Hello ${username}`;
}

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello ${savedUsername}`;
}
