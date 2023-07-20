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
    
}


pages.loadFor = (page) => {
    eval("pages.page_" + page + "();")
}
