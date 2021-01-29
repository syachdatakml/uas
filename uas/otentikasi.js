function Login(){

}
    
const user = document.querySelector(".user");
const pass = document.querySelector(".pass");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function(){
    console.log("button diklik");
    
    if(user.value == "syachdat" && pass.value == "admin"){
        alert("login sukses")
        window.location="admin.html";
    }else{
        alert("login gagal")
    }
})
