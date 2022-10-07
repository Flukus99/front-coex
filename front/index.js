const email=document.getElementById('email');
const pass=document.getElementById('password')
const submit=document.getElementById('btn');
const banner=document.getElementById('banner');
const usuario={
    email:"elementary@outlook.es",
    password:"ivan123"
}

email.addEventListener('keydown',()=>{
    
})

submit.addEventListener('click',()=>{
    const user={
        email:email.value,
        password:pass.value
    }


    if(user.email=="" || user.password==""){
        alert("Faltan credenciales")
    }
    else{

        if(user.email.length<6 || user.password.length<6){
                alert("usuario y la contraseña no contienen más de 6 carácteres")}
        else{

    
                    if(user.email===usuario.email){
            
                        if(user.password==usuario.password){
                            console.log(user)
                            banner.style.display="block"
                        }
                        else{
                            alert("usuario o contraseña inconrreta")
                            console.log("dos")
                        }
                    }
                    else{
                        alert("usuario o contraseña inconrreta")
                    }
                    
                    
                   
        }
        


    }
    

    
    


    
})