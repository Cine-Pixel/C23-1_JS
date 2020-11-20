const date = new Date();
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];


const nextMonth = () => {
    const year = (date.getMonth()===11) ? date.getFullYear()+1 : date.getFullYear();
    const month = (date.getMonth()+1)%12;
    date.setFullYear(year);
    date.setMonth(month);
    fill_days(date);
}

const previousMonth = () => {
    const year = (date.getMonth()===0) ? date.getFullYear()-1 : date.getFullYear();
    const month = (date.getMonth()===0) ? 11 : date.getMonth()-1;
    date.setFullYear(year);
    date.setMonth(month);
    fill_days(date);
}

const fill_days = (date) => {
    document.getElementById('header').innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;
    const firstDay = (new Date(date.getFullYear(), date.getMonth())).getDay();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    
    let days = '';
    for(let e=0; e<firstDay; e++) {
        days += '<div></div>';
    }
    for(let i=0; i<daysInMonth; i++) {
        let isToday = new Date().getDate() === i+1 && new Date().getMonth() === date.getMonth();
        days += `<div class="day ${isToday ? "today" : ""}">${i+1}</div>`;
    }
    document.querySelector('.display-days').innerHTML = days;    
}

fill_days(date);
document.getElementById('next').addEventListener('click', nextMonth);
document.getElementById('prev').addEventListener('click', previousMonth);