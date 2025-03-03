// settings for the generated password
const passwordLength = 12
const includeLowerCase = true
const includeUpperCase = true
const includeNumbers = true
const includeSymbols = true

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const symbols = "!@#$%^&*"
    let allChars = ""
    let password = []
    let randomChar

// according to settings, creates a string of eligible characters (allChars)
// also makes sure atleast one character of each setting selected is included
    if (includeLowerCase) {
        allChars += lowerCaseChars
        password.push(lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)])
    }
    if (includeUpperCase) {
        allChars += upperCaseChars
        password.push(upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)])
    }
    if (includeNumbers) {
        allChars += numbers
        password.push(numbers[Math.floor(Math.random() * numbers.length)])
    }
    if (includeSymbols) {
        allChars += symbols
        password.push(symbols[Math.floor(Math.random() * symbols.length)])
    }

// this loop completes the password using random characters in allChars string
    for (i = password.length; i < length; i++) {
        randomChar = Math.floor(Math.random() * allChars.length)
        password.push(allChars[randomChar])
    }

// sorts the password in random order
    password.sort(() => Math.random() - 0.5);

// returns the password as a string
    return password.join("")
}

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)

console.log(`Generated password: ${password}`)