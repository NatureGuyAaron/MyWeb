const Firstname= document.getElementById('Firstname')
const Lastname= document.getElementById('lastname')
const Password= document.getElementById('Password')
const Confirm= document.getElementById('Confirm')

form.addEventListener ('submit', (e) => {
let messages = []
if (firstname.value === '' || Firstname.value == null ) {
    messages.push('A name is required')
}

if (Password.value.length <= 6){
    messages.push('Password must be longer than 6 characters')
}
if(messages.length > 0){
e.preventDefault()
errorElement.innerText= messages.join(',')
}
})