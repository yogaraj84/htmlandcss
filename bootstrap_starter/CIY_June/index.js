var fred = ['fred', 'flintstone', 'fred@mail.com', 50]
var titleElem = document.head.querySelector('title')


console.log('length = ', fred.length);

//for(var i = 0; i < fred.length; i++){
for(var i in fred){
    if (i==0)
        console.log('First Name: ', fred[i])
    else if (i==1)
        console.log('Last Name: ', fred[i])
    else if (i==2)
        console.log('Email: ', fred[i])
    else
        console.log('Age: ', fred[i])
    
}

// 1.Create an image = not in DOM yet
var imgElem = document.createElement('img')

//Decorate the element
imgElem.setAttribute('src', 'https://static.fjcdn.com/pictures/Randall_357a8d_494265.jpg')

//Find the place to attach the element
var hereElem = document.body.querySelector('#here')

//Attach image to here
hereElem.appendChild(imgElem)
