var firstNameInput = document.getElementById("fName");
var lastNameInput = document.getElementById("lName");
var typeSelect = document.getElementById("type");
var CompanySelect = document.getElementById("Company");
var validationTypeMessage = document.getElementById("validationTypeMessage");
var validationFirstNameMessage = document.getElementById("validationFirstNameMessage");
var validationLastNameMessage = document.getElementById("validationLastNameMessage");
var validationCompanyMessage = document.getElementById("validationCompanyMessage");


function validateForm() {

    validationFirstNameMessage.style.display = "none";
    validationLastNameMessage.style.display = "none";
    validationTypeMessage.style.display = "none";
    validationCompanyMessage.style.display = "none"
    firstNameInput.className = "";
    lastNameInput.className = "";
    typeSelect.className = "";
    CompanySelect.className = "";

    if (typeSelect.value == "1" && !firstNameInput.value) {
        firstNameInput.className = "validation";
        validationFirstNameMessage.style.display = "block";
        validationFirstNameMessage.className = "validationMessage";
    }

    if (!typeSelect.value && !firstNameInput.value) {
        firstNameInput.className = "validation";
        validationFirstNameMessage.style.display = "block";
        validationFirstNameMessage.className = "validationMessage";
    }

    if (!lastNameInput.value) {
        lastNameInput.className = "validation";
        validationLastNameMessage.style.display = "block";
        validationLastNameMessage.className = "validationMessage";

    }

    if (!typeSelect.value) {
        typeSelect.className = "validation";
        validationTypeMessage.style.display = "block";
        validationTypeMessage.className = "validationMessage";
    }

    if (typeSelect.value == "2" && CompanySelect.value) {
        CompanySelect.className = "validation";
        validationCompanyMessage.style.display = "block";
        validationCompanyMessage.className = "validationMessage";
    }

}