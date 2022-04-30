let users = []

function register() {
    let fullname = document.getElementById("fname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let user = {
        email: email,
        fullname: fullname,
        password: password
    }

    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))

    console.log(user)
}


function getUser() {
    let userInfo = {
        email: email,
        password: password
    }
    let email = document.querySelector(".email").value
    let password = document.querySelector(".password").value
    localStorage.setItem("users", JSON.stringify(userInfo))
    if (email == "email" && password == "password") {

        alert("mojo")
    }

}