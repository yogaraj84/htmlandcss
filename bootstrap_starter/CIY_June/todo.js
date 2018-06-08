function liHandler(eventObject){
    console.log('li clicked');
    eventObject.target.remove();
}

function clickHandler() {
    console.log('> button clicked: ', inputElem.value);
    var task = inputElem.value;

    if (task == ""){
        return;
    }

    var liElem = document.createElement('li');
    liElem.textContent = task;
    liElem.addEventListener('click', liHandler);

    uElem.appendChild(liElem);


    inputElem.value = "";
}

function mouseEnterHandler() {
    console.log('mouse entered');
}

function mouseLeaveHandler() {
    console.log('mouse left');
}

var inputElem = document.body.querySelector('#my-todos')
var addBtnElem = document.body.querySelector('#item')
var addBtnElem = document.body.querySelector('#addBtn')
addBtnElem.addEventListener('click', clickHandler);
//addBtnElem.addEventListener('mouseenter', clickHandler);
//addBtnElem.addEventListener('mouseleave', clickHandler);
