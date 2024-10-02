document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let valid = true;

    if (name === "") {
        alert("Name is required.");
        return;
    }
    if (!valipass(password)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.");
        valid = false;
    }
    if (!validemail(email)) {
        alert("Invalid email format.");
        valid = false;
    }
    if (password !== confirmPassword) {
        alert("Password does not match");
        valid = false;
    }

    if(valid){
        alert("Registration successful!");
    }

    function valipass(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    function validemail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
