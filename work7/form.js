const changeParentNode = () => {
    document.body.children[0].style.backgroundColor = 'red';
    document.body.children[0].children[2].style.backgroundColor = 'green';
    document.body.children[2].children[0].setAttribute('disabled', 'true');
    document.body.children[2].children[6].removeAttribute('disabled');
    document.body.children[2].children[8].removeAttribute('disabled');
    document.body.children[2].children[2].setAttribute('disabled', 'ture');
}

const changeFirstChild = () => {
    document.body.children[0].style.backgroundColor = 'white';
    document.body.children[0].children[0].style.backgroundColor = 'red';
    document.body.children[2].children[6].setAttribute('disabled', 'true');
    document.body.children[2].children[8].setAttribute('disabled', 'true');
    document.body.children[2].children[0].removeAttribute('disabled');
    document.body.children[2].children[2].removeAttribute('disabled');
}

const changeNextSibling = () => {
    document.body.children[0].children[0].style.backgroundColor = 'white';
    document.body.children[0].children[1].style.backgroundColor = 'red';
    document.body.children[2].children[4].removeAttribute('disabled');
}

const changePreviousSibling = () => {
    document.body.children[0].children[0].style.backgroundColor = 'red';
    document.body.children[0].children[1].style.backgroundColor = 'white';
}