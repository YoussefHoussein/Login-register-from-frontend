const pages ={}

pages.base_url = "http://localhost/Login-register-backend/";




pages.page_index =  () => {
    const index_url = pages.base_url + "login.php"
    const username = document.getElementById("floatingInput")
    const password = document.getElementById("floatingPassword")
    const btn_submit = document.getElementById("login")

    btn_submit.addEventListener("click", (e) =>{
        e.preventDefault()

        const data ={
            username,
            password,
        }
        
        fetch(index_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                
              },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data)=>{
            console.log(data)
        })
        .catch((data) =>{
            console.log(data.messaage)
        })
    })

    
}



pages.page_register = () => {
    const articles_url = pages.base_url + "register.php";
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

                fetch("http://localhost/Login-register-backend/register.php" , {
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

