let password = document.querySelector('#user_password');
let confirm_password=document.querySelector('#confirm_user_password');
if(confirm_password.style.border.value==='5px solid green'){
    prompt(password.value+confirm_password.value);
}
prompt(password);
let signup=document.querySelector('.signup').addEventListener("click",()=>{
    if(password.value===confirm_password.value){
        prompt('password is matching');
    }
    else{
        prompt('password is not matching');
    }
});/*
function error(){
    if(password.value===confirm_password.value){
        prompt('password is not matching');
    }
}*/
