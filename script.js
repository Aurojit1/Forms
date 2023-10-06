function validateForm() {
    var username = document.getElementById("username").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var phoneNumber = document.getElementById("phoneNumber").value.trim();
    var email = document.getElementById("email").value.trim();

    if (username === "") {
        alert("Please enter your First Name.");
        
    }

    if (lastName === "") {
        alert("Please enter your Last Name.");
    }

    if (phoneNumber === "") {
        alert("Please enter your Phone Number.");
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
        alert("Please enter a valid Email address.");
    }
        console.log("First Name: ", username);
        console.log("Last Name: ", lastName);
        console.log("Phone Number: ", phoneNumber);
        console.log("Email: ", email);
    return false;
}
