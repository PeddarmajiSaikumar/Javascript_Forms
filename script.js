function validate(){
    var userame=document.getElementById("username");
    var password=document.getElementById("password");
    if(userame.value.trim()=="" || password.value.trim()==""){
        alert("Enter the required Details");
        return false;
    }else{
        // alert("Validation Succesful");
        return true;
    }
}