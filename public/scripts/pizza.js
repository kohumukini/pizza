document.getElementById("pizza-form").onsubmit = () => {
    
    let isValid = true; 

    // Clear all errors
    clearErrors(); 

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim(); 

    if (fname === "" ) {
        document.getElementById("err-fname").style.display = "block";
        isValid = false;  
    } 
    if (lname === "") {
        document.getElementById("err-lname").style.display = "block"; 
        isValid = false;
    }

    return isValid; 
}; 

const clearErrors = () => {
    let errors = document.getElementsByClassName("err"); 

    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}