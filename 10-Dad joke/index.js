const joke = document.getElementById("joke")
console.log("eejk", joke)

const btn = document.getElementById("button")
console.log("eehk", btn)



btn.addEventListener("click", generate)
generate()

// function generatejoke() {

//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//         .then((res) => res.json())
//         .then((data) => {
//             joke.innerHTML = data.joke
//         })
// }


function generate() {

    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            joke.innerHTML = data.joke
        })
}
