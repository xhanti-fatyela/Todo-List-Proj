let users = []

function register() {
    let fullname = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        email: email,
        fullname: fullname,
        password: password
    }

    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))

    if(email == password){
    
    }
    else{
        alert("Welcome You Have Successfully Registered!!")
        
    }
      

}




function getUser() {
         

         let user = JSON.parse(localStorage.getItem("users"))
         let email = document.getElementById("signInEmail").value
         let password = document.getElementById("signInPassword").value  

         console.log(email, password)
    let list = user.length &&
    JSON.parse(localStorage.getItem('users')).some(data => data.email == email && data.password == password);
    
    if(!list){
        alert("Enter Correct Info or Sign Up");
    }
    else{
        alert("Welcome !")
        location.href = "dashboard.html";
    }
    // for(let i = 0; i < user.length; i++){
       
    //     if (email == email && password == password) {
            
    //          location.href = "dashboard.html"
             
    //     }
        
    // }
  

}

