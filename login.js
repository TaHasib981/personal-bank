document.getElementById('btn-login').addEventListener('click', function(){
    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value

    if(email === 'hasib981@gmail.com' && password === 'hasib'){
        location.href = "index.html";
    }else{
        console.log('enter a valid email and password')
    }

})