let submitButton = document.getElementById("form-submit-btn")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let inputs = document.querySelectorAll(".input")

submitButton.addEventListener("click", (e) => {
    if(firstName.value == "" || lastName.value == "" || (email.value == "" || email.value.indexOf("@") === -1) || password.value == "" ){
        if(firstName.value == ""){
            firstName.nextElementSibling.style.display = "block"
            firstName.style.border = "2px solid hsl(0, 100%, 74%)"
            firstName.parentElement.nextElementSibling.style.visibility = "visible"
        }
        if(lastName.value == ""){
            lastName.nextElementSibling.style.display = "block"
            lastName.style.border = "2px solid hsl(0, 100%, 74%)"
            lastName.parentElement.nextElementSibling.style.visibility = "visible"
        } 
        if(email.value == "" || email.value.indexOf("@") === -1){
            email.nextElementSibling.style.display = "block"
            email.style.border = "2px solid hsl(0, 100%, 74%)"
            email.parentElement.nextElementSibling.style.visibility = "visible"
        }
        if(password.value == ""){
            password.nextElementSibling.style.display = "block"
            password.style.border = "2px solid hsl(0, 100%, 74%)"
            password.parentElement.nextElementSibling.style.visibility = "visible"
        } 
    } else {
        inputs.forEach(input => {
            input.value = ""
        })
    }
    e.preventDefault()
})

