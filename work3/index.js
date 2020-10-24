const task1 = (text) => text.length;
const task2 = (text) => text.split('a').length-1;
const task3 = (text) => text.split(' ').length-1;
// const task4 = () 
const task5 = () => {
    let result = '';
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    for(let i=0; i<40; i++) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
const task6 = (n) => {
    let result = '';
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    for(let i=0; i<n; i++) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
const task7 = (n) => {
    let result = '';
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    for(let i=0; i<20; i++) {
        for(let j=0; j<n; j++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        result += ' ';
    }
    return result;
}
const task8 = (m, n, k) => {
    let result = '';
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    for(let i=0; i<k; i++) {
        let wordLength = Math.floor(Math.random() (n-m+1) + m);
        for(let j=0; j<wordLength; j++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        result += ' ';
    }
    return result;
}
// const task9 = ()
const task10 = (text) => {
    text = 'word1 and some other words including word3';
    const arr = ['word1', 'word2', 'word3', 'word4'];
    arr.forEach(word => {
        text=text.replace(new RegExp(word, 'g'), "*".repeat(word.length));
    });
    return text;
}
const task11 = (text) => {
    return text.split('').filter((item, pos, arr) => {
      return arr.indexOf(item) == pos;
    }).join('');
}