document.getElementById("pizza-form").onsubmit = () => {
    
    let isValid = true; 

    // Clear all errors
    clearErrors(); 

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim(); 
    let email = document.getElementById("email").value.trim();

    if (fname === "" ) {
        document.getElementById("err-fname").style.display = "block";
        isValid = false;  
    } 
    if (lname === "") {
        document.getElementById("err-lname").style.display = "block"; 
        isValid = false;
    }

    if (email === "") {
        document.getElementById("err-email").style.display = "block";
        isValid = false; 
    }

    let methodSelected = false; 
    let methodButtons = document.getElementsByClassName("method");

    for (let i = 0; i < methodButtons.length; i++) {
        if (methodButtons[i].checked) {
            methodSelected = true; 
        }
    }

    if (!methodSelected) {
        document.getElementById("err-method").style.display = 'block'; 
        isValid = false; 
    }

    let size = document.getElementById("size").value; 
    if (size == "none") {
        document.getElementById("err-size").style.display = "block"; 
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