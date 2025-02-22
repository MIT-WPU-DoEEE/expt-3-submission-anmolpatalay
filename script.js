document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;

        // Name validation
        let name = document.getElementById("name").value.trim();
        if (name === "" || !/^[A-Za-z ]{3,}$/.test(name)) {
            document.getElementById("nameError").textContent = "Enter a valid name (min 3 letters).";
            isValid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        // Phone validation
        let phone = document.getElementById("phone").value.trim();
        if (!/^\d{10}$/.test(phone)) {
            document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
            isValid = false;
        } else {
            document.getElementById("phoneError").textContent = "";
        }

        // Email validation
        let email = document.getElementById("email").value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById("emailError").textContent = "Enter a valid email.";
            isValid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        // Zip validation
        let zip = document.getElementById("zip").value.trim();
        if (!/^\d{5,6}$/.test(zip)) {
            document.getElementById("zipError").textContent = "Enter a valid zip code (5-6 digits).";
            isValid = false;
        } else {
            document.getElementById("zipError").textContent = "";
        }

        if (isValid) {
            submitForm();
        }
    });
});
