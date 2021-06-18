let button1 = document.getElementById("button-fetch")
    button1.addEventListener("click", handleClick)

let getJoke = () => {
    let apiURL = `https://api.chucknorris.io/jokes/random`;
    fetch(apiURL)
    .then((res) => res.json())
    .then((result) => displayJoke(result.value))
    .catch((error) => console.log(error))
}

getJoke();

function displayJoke(joke){
    console.log(joke)
    const para = document.createElement('p');
    
    para.append(joke);
    const display = document.getElementById('display-fetch');
    display.innerText = ""
    display.append(para);
}

function handleClick() {
    getJoke();
}






// async function getJokeAsync(){
//     let apiURL = `https://api.chucknorris.io/jokes/random`;
// try {
//     const response = await fetch(apiURL);//json format
//     const result = await response.json();// converts json to object literal
//     console.log(result);
// } catch (error) {
//     console.log(error);
// }
// console.log(`hey hey hey`)
// }

// getJokeAsync();

//What are we attaching to inorder to display the fetched results?
 //Create a P tag
 //Set the Inner-text
 //Append the P tag that was just created in 3 lines above

