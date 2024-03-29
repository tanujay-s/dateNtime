const main = document.getElementById('main');

const date = document.getElementById('date');
const time = document.getElementById('time');

time.textContent = dayjs().format('h:mm:ss A');

date.textContent = dayjs().format('dddd D MMMM, YYYY');