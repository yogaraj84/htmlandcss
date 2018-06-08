function createBottles(numOfBottles){
    var divElem = document.createElement('div');

    for (var i = 0; i < numOfBottles; i++) {
    //Create the image
    var imgElem = document.createElement('img');
    imgElem.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Duff_beer.jpg/110px-Duff_beer.jpg');
    imgElem.classList.add('small');

    divElem.appendChild(imgElem);
    }
    return (divElem);
}

function createText(line) {
    var divElem = document.createElement('div');
    divElem.textContent = line;
    return (divElem);
}

var beerSongElem = document.body.querySelector('#beer-song');

for (var i = 99; i > 0; i--) {
    var pElem=document.createElement('p');
    var bottles = createBottles(i);
    beerSongElem.appendChild(bottles);
    var text = createText(`${i} bottles of beer on the wall, ${i} bottles of beer`);
    beerSongElem.appendChild(text);
    var text = createText(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
    pElem.appendChild(text);
    beerSongElem.appendChild(pElem);
}
