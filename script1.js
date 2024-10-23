function validate(){
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var region = document.getElementById("region").value;
    var message = document.getElementById("message").value;
    var agreement = document.getElementById("agreement");
    
    if(fullname.length <= 5){
        alert("Username length must be at least 5 characters")
    }
    else if(!email.endsWith("@gmail.com")){
        alert("Please Insert the correct email")
    }
    else if(region.length <= 0){
        alert("Input must be an alphabet")
    }
    else if(message <= 0){
        alert("Please write more message")
    }
    else if(!agreement.checked){
        alert("Please Check the agreement if you want to proceed")
    }
    else{
        alert("Message Successfully Registered");
        window.location.href = "success.html"
    }
}



