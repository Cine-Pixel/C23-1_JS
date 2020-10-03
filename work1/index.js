// Task 1
const task1 = (text, cls) => {
    return `<p class=${cls}>${text}</p>`;
}

document.write(task1("bold, underlined, italic text.", "bui"));

// Task 2
const task2 = (n1, n2) => {
    return `<p>${n1+n2}</p>`;
}

document.write(task2(5,6));

// Task 3
const task3 = (text, size) => {
    return `<p style="font-size: ${size}px;">${text} with the size of ${size}</p>`
}

document.write(task3("Bigger text", 30));

// Task 4
const task4 = (width) => {
    const table = document.createElement("table");
    for (let r=0; r < 2; r++) {
        var row = document.createElement("tr");

        for (let c=0; c < width; c++) {
            var col = document.createElement("td");
            var content = document.createTextNode("Placehoder text.");
            col.appendChild(content);
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    return table;
}

document.getElementById('table').appendChild(task4(3));

// Task 5
const task5 = (height) => {
    const table = document.createElement("table");
    for (let r=0; r < height; r++) {
        var row = document.createElement("tr");

        for (let c=0; c < 2; c++) {
            var col = document.createElement("td");
            var content = document.createTextNode("Placehoder text.");
            col.appendChild(content);
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    return table;
}

document.getElementById('table').appendChild(task5(3));

// Task 6
const task6 = (width, height) => {
    const table = document.createElement("table");
    for (let r=0; r < height; r++) {
        var row = document.createElement("tr");

        for (let c=0; c < width; c++) {
            var col = document.createElement("td");
            var content = document.createTextNode("Placehoder text.");
            col.appendChild(content);
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    return table;
}

document.getElementById('table').appendChild(task6(2, 3));

// Task 7
const task7 = (bgColor) => {
    const table = document.createElement("table");
    table.style.backgroundColor = bgColor;
    for (let r=0; r < 2; r++) {
        var row = document.createElement("tr");

        for (let c=0; c < 2; c++) {
            var col = document.createElement("td");
            var content = document.createTextNode("Placehoder text.");
            col.appendChild(content);
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    return table;
}

document.getElementById('table').appendChild(task7("blue"));