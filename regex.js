document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let mobileNumber = document.getElementById("mobileNumber");
    let emailid = document.getElementById("emailid");
    let aadhaarNumber = document.getElementById("aadhaarNumber");
    let address = document.getElementById("address");
    let qualification = document.getElementById("qualification");
    let genderMale = document.querySelector('input[name="gender"][value="Male"]');
    let genderFemale = document.querySelector('input[name="gender"][value="Female"]');

    let isValid = true;

    document.querySelectorAll(".error").forEach(function(error) {
        error.style.display = "none";
    });

    let firstNameRegex = /^[a-zA-Z]{1,16}$/;
    if (!firstNameRegex.test(firstName.value.trim())) {
        document.getElementById("firstNameError").style.display = "block";
        isValid = false;
    }

    let lastNameRegex = /^[a-zA-Z]{1,5}$/;
    if (!lastNameRegex.test(lastName.value.trim())) {
        document.getElementById("lastNameError").style.display = "block";
        isValid = false;
    }

    let mobileNumberRegex = /^[6-9][0-9]{9}$/;
    if (!mobileNumberRegex.test(mobileNumber.value.trim())) {
        document.getElementById("mobileNumberError").style.display = "block";
        isValid = false;
    }

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(emailid.value.trim())) {
        document.getElementById("emailidError").style.display = "block";
        isValid = false;
    }

    if (!genderMale.checked && !genderFemale.checked) {
        document.getElementById("genderError").style.display = "block";
        isValid = false;
    }

    let aadhaarRegex = /^[0-9]{12}$/;
    if (!aadhaarRegex.test(aadhaarNumber.value.trim())) {
        document.getElementById("aadhaarNumberError").style.display = "block";
        isValid = false;
    }

    let addressRegex = /^[a-zA-Z0-9\s,.-]+$/;
    if (!addressRegex.test(address.value.trim())) {
        document.getElementById("addressError").style.display = "block";
        isValid = false;
    }

    let qualificationRegex = /^[a-zA-Z\s]+$/;
    if (!qualificationRegex.test(qualification.value.trim())) {
        document.getElementById("qualificationError").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
