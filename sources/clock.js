const clock = document.querySelector(".clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${min}:${sec}`;
}
getClock();
setInterval(getClock, 1000);

const clockRe = document.querySelector(".clock-re");

function getClockRe() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clockRe.innerText = `${hour}:${min}:${sec}`;
}
getClockRe();
setInterval(getClockRe, 1000);
