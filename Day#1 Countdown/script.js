const newYear = "1 Jan 2022";
const dayEL = document.getElementById("day");
const hourEL = document.getElementById("hour");
const minuteEL = document.getElementById("minute");
const secondEL = document.getElementById("second");

function countDown() {
  const newYearsDate = new Date(newYear);
  const today = new Date();

  let totalseconds = Math.floor((newYearsDate - today) / 1000);

  let days = Math.floor(totalseconds / 24 / 3600);
  let hours = Math.floor((totalseconds / 3600) % 24);
  let minutes = Math.floor((totalseconds / 60) % 60);
  let seconds = totalseconds % 60;

  dayEL.innerHTML = days;
  hourEL.innerHTML = hours;
  minuteEL.innerHTML = minutes;
  secondEL.innerHTML = seconds;
}
countDown();
setInterval(countDown, 1000);
