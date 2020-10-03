let loginButton = document.getElementById("LoginButton");

loginButton.addEventListener("click", function(e) {
    let username = document.getElementById("LoginUsername").value;
    let password = document.getElementById("LoginPassword").value;
    let data  = {
        "username" : username,
        "password" : password
    }
    let headers = {
        "Content-Type" : "application/json"
    }
    data = JSON.stringify(data)
    fetch("/logmeinplease", {method: "POST", headers : headers,  body: data})
    .then(function(response) {
        console.log(response.status)
        if (response.status == 400) {            
            window.location.href = "./loginERR.html" 
        }
    }).catch(err => console.log("ERROR" + err))
})