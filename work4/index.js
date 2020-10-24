const dispTime = document.getElementById('time');
const dispDate = document.getElementById('date');

const task6 = () => {
    const time = new Date();
    const textReady = `
        ${time.getHours() < 10 ? '0'+time.getHours() : time.getHours()}
        :${time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes()}
        :${time.getSeconds() < 10 ? '0'+time.getSeconds() : time.getSeconds()}
    `
    dispTime.innerHTML=textReady;
    setTimeout(setTime, 1);
}

const task7 = () => {
    const date = new Date();
    const oldDate = new Date('2016/01/01');
    let diff = new Date(date-oldDate) / 1000;

    var days = Math.floor(diff / 86400);
    diff -= days * 86400;

    var hours = Math.floor(diff / 3600) % 24;
    diff -= hours * 3600;

    var minutes = Math.floor(diff / 60) % 60;
    diff -= minutes * 60;

    var seconds = diff % 60;
    const textReady = `2016 წლის პირველი იანვრიდან დღემდე გასულია ${days} დღე ${hours} საათი ${minutes} წუთი ${seconds} წამი`;
    dispDate.innerHTML = textReady;
}
// const task8 () => 

const task9 = (inpDate) => {
    const date = new Date();
    const oldDate = new Date(inpDate);
    let diff = new Date(date-oldDate) / 1000;

    var days = Math.floor(diff / 86400);
    diff -= days * 86400;

    const textReady = `${oldDate.getFullYear()}/${oldDate.getMonth()}/${oldDate.getDay()}-დან დღემდე გასულია ${days} დღე`;
    dispDate.innerHTML = textReady;
}
