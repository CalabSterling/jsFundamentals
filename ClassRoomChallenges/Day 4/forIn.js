let student = {
    name: "Amurata",
    awesome: true,
    certificaiton: "Javascript",
    week: 1,
}

//for in loops are great for iterating over values in an object.
//for in loops count the enumberable (countable) properties in an object
//the key/property is used to access the value of the key/property
//the value of the key/property is student[item].

//Objects contain propertitiis that are enumberable. Properties in a n object don't contain an index like arrays. But they acan be counted.

//properties are keys. Keys go IN objects(lock) for it to correctly work and unlock.

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

/* BRONZE

    - Using a for in loop, console.log the name of each character from the 
    members key in the fellowshipOfTheRing object.

*/

/* SILVER
    - Add a conditional to the for in loop that checks if the characters 
    name does NOT begin with a vowel. Then, using string interpolation, 
    console.log either '__'s name does not begin with a vowel' or '__'s 
    name does begin with a vowel'.
*/

/* GOLD

    - Declare a globally scoped variable of arr that is initialized as 
    an empty array. If the characters name does not begin with a vowel, 
    add that character to the new array, and then console.log the array.

*/

arr = [

]

let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor',
        Erabor: 'drinking gourd'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

//console.log(fellowshipOfTheRing.members);

/*for (character in fellowshipOfTheRing.members) {
    console.log(character.charAt(0));
}*/


for (characters in fellowshipOfTheRing.members){
    if (characters.charAt(0) == 'A' || characters.charAt(0) == 'E' || characters.charAt(0) == 'I' || characters.charAt(0) == 'O' || characters.charAt(0) == 'U'){
        console.log(`${characters}'s name does begin with a vowel.`);
        arr.push(characters);
    }
    else (
        console.log(`${characters}'s name doesn't begin with a vowel.`)
    )
}

console.log(arr)

