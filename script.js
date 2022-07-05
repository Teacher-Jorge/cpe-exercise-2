//CPE exercises - Page 02 - Question 1

let input1 = document.getElementById('input1')
let word1 = document.getElementById('word1')
const check1 = document.getElementById('check1')
let score = document.getElementById('score')
let value = score.innerHTML


input1.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input1.value === 'abustle') {
        word1.textContent = 'abustle'
        word1.style.color = 'darkmagenta'
        check1.style.visibility = 'visible'
        value ++
        document.getElementById('score').innerHTML = value
        input1.disabled = true
    }
    })


input1.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input1.value != 'abustle') {
        word1.textContent = input1.value
        word1.style.color = 'red'
        check1.style.visibility = 'hidden'
        value --
        document.getElementById('score').innerHTML = value
    }
})

//CPE exercises - Page 02 - Question 2

let input2 = document.getElementById('input2')
let word2 = document.getElementById('word2')
const check2 = document.getElementById('check2')


input2.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input2.value === 'abuts') {
        word2.textContent = 'abuts'
        word2.style.color = 'darkmagenta'
        check2.style.visibility = 'visible'
        value ++
        document.getElementById('score').innerHTML = value   
        input2.disabled = true
    }
    })


input2.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input2.value != 'abuts') {
        word2.textContent = input2.value
        word2.style.color = 'red'
        check2.style.visibility = 'hidden'
        value --
        document.getElementById('score').innerHTML = value
    }
})

//CPE exercises - Page 02 - Question 3

let input3 = document.getElementById('input3')
let word3 = document.getElementById('word3')
const check3 = document.getElementById('check3')

input3.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input3.value === 'abuzz') {
        word3.textContent = 'abuzz'
        word3.style.color = 'darkmagenta'
        check3.style.visibility = 'visible'
        value ++
        document.getElementById('score').innerHTML = value   
        input3.disabled = true
    }
})

input3.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input3.value != 'abuzz') {
        word3.textContent = input3.value
        word3.style.color = 'red'
        check3.style.visibility = 'hidden'
        value --
        document.getElementById('score').innerHTML = value
    }
})

//CPE exercises - Page 02 - Question 4

let input4 = document.getElementById('input4')
let word4 = document.getElementById('word4')
const check4 = document.getElementById('check4')

input4.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input4.value === 'accede') {
        word4.textContent = 'accede'
        word4.style.color = 'darkmagenta'
        check4.style.visibility = 'visible'
        value ++
        document.getElementById('score').innerHTML = value   
        input4.disabled = true
    }
})

input4.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input4.value != 'accede') {
        word4.textContent = input4.value
        word4.style.color = 'red'
        check4.style.visibility = 'hidden'
        value --
        document.getElementById('score').innerHTML = value
    }
})

//CPE exercises - Page 02 - Question 5

let input5 = document.getElementById('input5')
let word5 = document.getElementById('word5')
const check5 = document.getElementById('check5')

input5.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input5.value === 'achievable') {
        word5.textContent = 'achievable'
        word5.style.color = 'darkmagenta'
        check5.style.visibility = 'visible'
        value ++
        document.getElementById('score').innerHTML = value   
        input5.disabled = true
    }
})

input5.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input5.value != 'achievable') {
        word5.textContent = input5.value
        word5.style.color = 'red'
        check5.style.visibility = 'hidden'
        value --
        document.getElementById('score').innerHTML = value
    }
})



 