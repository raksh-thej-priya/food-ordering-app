function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Username validation: must contain only characters
    var usernamePattern = /^[a-zA-Z]+$/;
    if (!usernamePattern.test(username)) {
        alert("Username must contain only characters");
        return false;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email address");
        return false;
    }

    // Password validation: must contain characters, numbers, and symbols
    var passwordPattern = /^(?=.[a-zA-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{5,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must contain characters, numbers, and symbols");
        return false;
    }

    return true;
}