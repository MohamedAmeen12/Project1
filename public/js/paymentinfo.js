document.addEventListener("DOMContentLoaded", function() {
    var paymentPopup = document.getElementById("paymentPopup");
    paymentPopup.style.display = "block";

    var paymentForm = document.getElementById("paymentForm");
    var cardNumberInput = document.getElementById("cardNumber");
    var cardNumberError = document.getElementById("cardNumberError");
    var firstNameInput = document.getElementById("firstName");
    var firstNameError = document.getElementById("firstNameError");
    var lastNameInput = document.getElementById("lastName");
    var lastNameError = document.getElementById("lastNameError");
    var cvvInput = document.getElementById("cvv");
    var expMonthInput = document.getElementById("expMonth");
    var expYearInput = document.getElementById("expYear");
    var expMonthError = document.getElementById("expMonthError");
    var expYearError = document.getElementById("expYearError");

    
    function validateCardNumber() {
        var cardNumber = cardNumberInput.value;
        if (cardNumber.length !== 16) {
            cardNumberError.textContent = "Invalid card number. Please enter a 16-digit card number.";
        } else {
            cardNumberError.textContent = "";
        }
    }

    
    function validateFirstName() {
        var firstName = firstNameInput.value;
        if (!/^[A-Za-z]+$/.test(firstName)) {
            firstNameError.textContent = "First name should contain only letters.";
        } else {
            firstNameError.textContent = "";
        }
    }

    
    function validateLastName() {
        var lastName = lastNameInput.value;
        if (!/^[A-Za-z]+$/.test(lastName)) {
            lastNameError.textContent = "Last name should contain only letters.";
        } else {
            lastNameError.textContent = "";
        }
    }

    
    function validateCVV() {
        var cvv = cvvInput.value;
        if (!/^\d{3}$/.test(cvv)) {
            cvvError.textContent = "Invalid CVV. Please enter a 3-digit CVV.";
        } else {
            cvvError.textContent = "";
        }
    }

 
    function validateExpMonth() {
        var expMonth = expMonthInput.value;
        if (!/^\d{2}$/.test(expMonth) || parseInt(expMonth) < 1 || parseInt(expMonth) > 12) {
            expMonthError.textContent = "Invalid expiration month. Please enter a valid 2-digit month (01-12).";
        } else {
            expMonthError.textContent = "";
        }
    }

   
    function validateExpYear() {
        var expYear = expYearInput.value;
        if (!/^\d{4}$/.test(expYear) || parseInt(expYear) < 2015 || parseInt(expYear) > 2029) {
            expYearError.textContent = "Invalid expiration year. Please enter a valid 4-digit year (2015-2028).";
        } else {
            expYearError.textContent = "";
        }
    }

    
    cardNumberInput.addEventListener("input", validateCardNumber);
    firstNameInput.addEventListener("input", validateFirstName);
    lastNameInput.addEventListener("input", validateLastName);
    cvvInput.addEventListener("input", validateCVV);
    expMonthInput.addEventListener("input", validateExpMonth);
    expYearInput.addEventListener("input", validateExpYear);

    
    paymentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        
        if (
            cardNumberError.textContent === "" &&
            firstNameError.textContent === "" &&
            lastNameError.textContent === "" &&
            cvvError.textContent === "" &&
            expMonthError.textContent === "" &&
            expYearError.textContent === ""
        ) {
            alert("Payment information submitted successfully!");
            paymentForm.reset();
            paymentPopup.style.display = "none";
        }
    });
});
