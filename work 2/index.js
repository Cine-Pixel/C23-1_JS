const task1 = number => Math.ceil(number);
const task2 = number => Math.floor(number);
const task3 = number => Math.round(number);
const task4 = (number, logic) => (logic ? Math.ceil(number) : Math.floor(number));
const task5 = () => Math.random();
const task6 = () => Math.random() * (50-5+1) + 5;
const task7 = (n1, n2) => Math.random() * (Math.max(n1, n2) - Math.min(n1, n2) + 1) + Math.min(n1, n2);
const task8 = (n1, n2) => Math.floor(Math.random() * (Math.max(n1, n2) - Math.min(n1, n2) + 1) + Math.min(n1, n2));
const task9 = (n1, n2) => {
    let arr = [];
    while(arr.length < 10) {
        var r = Math.floor(Math.random() * (Math.max(n1, n2) - Math.min(n1, n2) + 1) + Math.min(n1, n2));
        arr.push(r);
    }
    return arr;
}
const task10 = (n, n1, n2) => {
    let arr = [];
    while(arr.length < n) {
        var r = Math.floor(Math.random() * (Math.max(n1, n2) - Math.min(n1, n2) + 1) + Math.min(n1, n2));
        arr.push(r);
    }
    return arr;
}