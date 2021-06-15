let myInformation = {
    name: "Sterling",
    age: 30,
    numberOfSiblings: 3,
    pets: true,
    petsNames: [
        "Boots", 
        "Purdy", 
        "Kiki",
        "Tila Tequila",
        "Cody",
    ],
    mostRecentMovieWatched: "Howl's Moving Castle",
    carsOwned: [
        {make: "Toyota", model: "Avalon"},
        {make: "Toyota", model: "Avalon"},
        {make: "Mazda", model: "CX-7"},
    ],
    favoriteSinger: "Doja Cat",
};

/*
Next Challenge is to go into a group and have everyone share their object by sharing their screen. Anyone not currently sharing the screen will create a new variable called studentInformation1 and copy their object. Then so on and so 
forth, creating an object for each student in your group(studentInformation2, studentInformation3, etc.). You should have an object for each person in your group. Create a new array with the variables that you created with your group.
*/


let studentInformation1 = {
    name: `Aryn Dawlton`,
    age: 27,
    numberOfSiblings: 9,
    pets: true,
    petsNames: [
        `Drax`, `Sonny`, `Badgie`
    ],
    mostRecentMovieWatched: "Raya and the Last Dragon",
    carsOwned: [
        {make: `Jeep`, model: `Commander`},
    ],
    favoriteSinger: `Beyonce`,
};

let studentInformation2 = {
    name: `Stephanie`,
    age: 38,
    numberOfSiblings: 1,
    pets: true,
    petsNames: [
        "Ampersand", "Pendleton", "Rowsdower", "Winifred"
    ],
    mostRecentMovieWatched: `Sailor Moon Eternal Part 1`,
    carsOwned: [
        {make: `Jeep`, model: `Renegade`},
    ],
    favoriteSinger: "Credence Clear Water Revival",
};

let newArray = [
    myInformation,
    studentInformation1,
    studentInformation2,
]

console.log(`${newArray[0].name}, ${newArray[1].name}, and ${newArray[2].name} went to the store. ${newArray[0].carsOwned[0].make}`);