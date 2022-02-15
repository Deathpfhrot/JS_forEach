console.log('%c-----------lev1_1: forEach()-------', 'color:pink');
//-----------Übung lev1_1: forEach()

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

let alphaGetraenke = getraenke.sort();
console.log(alphaGetraenke);

alphaGetraenke.forEach(myDrinks => {

    console.log(myDrinks)
    document.write(myDrinks + "<br>")

});

console.log('%c-----------lev1_2: map()-------', 'color:pink');
//-----------Übung lev1_2: map()

let upperDrinks = getraenke.map(makebigger => {
    console.log('test');
    return makebigger.toUpperCase()
})
console.log(upperDrinks);

console.log('%c-----------lev1_3: map()-------', 'color:pink');
//-----------Übung lev1_3: map()


let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];  

let sortArray = array.sort((a, b) => a - b);
console.log(sortArray);


sortArray.forEach(multiplier => {
    console.log(multiplier * 2);
})

// alphaGetraenke.forEach(myDrinks => {

//     console.log(myDrinks)
//     document.write(myDrinks + "<br>")

// });

// console.log(num5.sort((a, b) => a - b));


console.log('%c-----------lev1_5: forEach()-------', 'color:pink');
//-----------Übung lev1_5: forEach()


let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

let numbersDev = checkNumber.filter(zahl => zahl % 3 == 0)
console.log(numbersDev);

numbersDev.forEach(addit => {
    console.log(addit + 200);
})

