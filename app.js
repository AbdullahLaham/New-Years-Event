const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
let newYears = '1 Jan 2023';
function countDown() {
	const currentDate = new Date();
	const newYearsD = new Date(newYears);
	const seconds = (newYearsD - currentDate) / 1000; //to convert from milliSeconds to seconds
	const days = Math.floor(seconds / 3600 / 24);
	const hours = Math.floor(seconds / 3600) % 24;
	const minutes = (Math.floor(seconds / 60) % 60);
	const sec = Math.floor(seconds % 60);
	daysEl.innerHTML = formatTimes(days);
	hoursEl.innerHTML = formatTimes(hours);
	minsEl.innerHTML = formatTimes(minutes);
	secondsEl.innerHTML = formatTimes(sec);
	console.log(days, hours, minutes, sec);
	
}
countDown();
setInterval(countDown, 1000);
function formatTimes(time) {
	return time < 10 ? `0${time}`: time;
}