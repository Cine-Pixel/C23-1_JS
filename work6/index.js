const task1 = () => {
    const weeks = ['ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი', 'კვირა'];
    const disp = document.getElementById('display');
    const buttons = document.getElementsByTagName("button");
    // console.log(buttons);
    for(button of buttons) {
        button.addEventListener('click', (e) => {
            const week = e.target.innerHTML;
            disp.innerHTML = weeks[week-1];
        });
    }
}

task1();

const task2 = () => {
    const buttons = document.getElementById('buttons');
    console.log(buttons.children);
}

task2();