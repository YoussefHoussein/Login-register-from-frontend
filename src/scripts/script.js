const pages ={}





pages.page_index =  () => {
    const index_url = "http://localhost/Login-register-backend/login.php"
    const username = document.getElementById("login-username")
    const password = document.getElementById("login-password")
    const btn_submit = document.getElementById("btn-login")
    const link =document.getElementById("link-login")

    btn_submit.addEventListener("click", function(){
        const data = new FormData()
        data.append("username",username.value)
        data.append("password",password.value)

        fetch(index_url , {
            method: "POST",
             body: data
         })
        .then(response => response.json())
        .then(newPost => {
            const first_name = newPost.first_name
            const last_name = newPost.last_name
        if(newPost.status == "success"){

            localStorage.setItem('firstname',first_name)
             localStorage.setItem('lastname',last_name)
            document.getElementById('link-login').click()
            }
         })
            .catch(error => console.log(error))
    })

    
}



pages.page_register = () => {
    const register_url = "http://localhost/Login-register-backend/register.php";
    const first_name = document.getElementById('first_name')
    const last_name =document.getElementById('last_name')
    const username=document.getElementById('username')
    const password =document.getElementById('password')
    const confirm =document.getElementById('confirm')
    const btn = document.getElementById('login')
    const alert = document.getElementById('alert')
    const alert_text = document.getElementById('alert-text')
    btn.addEventListener('click', function(){
        if(first_name.value == "" || last_name.value == "" || username.value == "" || password.value =="" || confirm.value == ""){
            alert_text.innerHTML = "Please fill all the fields"
            alert.style.display = "block"
            alert.addEventListener('click',function(){
                alert.style.display = "none"
            })
        }
        else{
            if(password.value != confirm.value){
                alert_text.innerHTML =  "Please Confirm the password correctly"
                alert.style.display = "block"
                alert.addEventListener('click',function(){
                    alert.style.display = "none"
                })
            }
            else{
                const data = new FormData()
                data.append("first_name",first_name.value)
                data.append("last_name",last_name.value)
                data.append("username",username.value)
                data.append("password",password.value)

                fetch(register_url , {
                    method: "POST",
                    body: data
                })
                .then(response => response.json())
                .then(newPost => {
                  if(newPost.status == "success"){
                    localStorage.setItem('firstname',first_name.value)
                    localStorage.setItem('lastname',last_name.value)
                    document.getElementById('linking').click()
                  }
                })
                .catch(error => console.log(error))
            }
        }
    })
    
}

pages.page_result = () => {
    const first_name = localStorage.getItem('firstname')
    const last_name = localStorage.getItem('lastname')
    const result = document.getElementById('result')

    result.innerHTML += first_name+" "+last_name
}
pages.loadFor = (page) => {
    eval("pages.page_" + page + "();")
}

