document.getElementById("btn-submit").addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //password
    const passwordFeild = document.getElementById('user-password');
    const password = passwordFeild.value;
    console.log(email, password);

    //Do not verify password on the client side
    if (email === 'arafat@gmail.com' && password === 'I am Arafat') {
        window.location.href = "bank.html";
    }
    else{
        alert("Please give valid UserName and Password")
    }
})