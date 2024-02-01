let btnEl = document.getElementById("btn");
let jokeEl = document.getElementById("joke");
const apiKey = "Yt5w1WdB033k2UhDLO51bw==bujbwQ4INOu8vgf9";


const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
};


const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
getJoke();
async function getJoke() {
    try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    let joke = data[0].joke;
    jokeEl.innerText = joke;


    } 
    catch (error) {
      console.log("Error");
      btnEl.disabled = false;
      btnEl.innerText = "Tell me a joke";
      joke.innerText = "Error, please try again."
    }
}

btnEl.addEventListener("click", getJoke);