 const input = document.querySelector('input')
 const output = document.querySelector('output')
 const span = document.querySelector('span')
 const guessesSoFar = document.getElementById('guessesSoFar')

 const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
 ]

 let randomizeWord = ''
 let maskedWord = ''
 let guesses = 0

 const newGame = () => {
    const random = Math.floor(Math.random() * words.length)
    randomizeWord = words[random]
    maskedWord = "*".repeat(randomizeWord.length)
    guesses = 0
    guessesSoFar.innerHTML = guesses
    console.log(randomizeWord)
    output.innerHTML = maskedWord
 }

 const win = () => {
    alert(`Arvasit oikein, sana on ${randomizeWord}. Arvauksia yhteensä ${guesses}.`)
    newGame()
 } 

 const replaceFoundChars = (guess) => {
    for (let i = 0; i < randomizeWord.length; i++) {
        const char = randomizeWord.substring(i, i + 1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i, 1, guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML = maskedWord
 }

 newGame()

 input.addEventListener('keypress',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        guesses++
        guessesSoFar.innerHTML = guesses

        const guess = input.value
        if (guess.toLowerCase() === randomizeWord.toLowerCase()) {
            win()
        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() === randomizeWord.toLocaleLowerCase()) {
                win()
            }
        } else {
            alert("Arvasit väärin!")
        }
        input.value=''
    }
 })