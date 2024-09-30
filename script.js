document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let isValid = true;

   
    clearErrors();

    
    if (name === "") {
        showError("nameError", "Name is required.");
        isValid = false;
    }

    
    if (!validateEmail(email)) {
        showError("emailError", "Invalid email format.");
        isValid = false;
    }

   
    if (!validatePassword(password)) {
        showError("passwordError", "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.");
        isValid = false;
    }

  
    if (password !== confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match.");
        isValid = false;
    }

    if (isValid) {
        alert("Registration successful!");
      
    }
});

function validateEmail(email) {
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function showError(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(errorElement => {
        errorElement.textContent = "";
        errorElement.style.display = "none";
    });
}
