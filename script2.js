const inputFields = document.querySelectorAll(".form-control");
const constraints = {
    Username: "required|alpha_dash|username_available",
    First_name: "required|alpha",
    Last_name: "required|alpha",
    Email: "required|email",
    Password: "required|alpha_num",
    Confirm_password: "required|alpha_num"
}
const errorMessages = {
    required: "This field is required",
    alpha: "This field must be an alphabet"
}
function handleInputFields(event) {
    const data = {
        [this.name]: this.value
    }
    const validation = new Validator(data, constraints);
    validation.passes();
    let errorMessage = validation.errors.first(this.name)
    if (errorMessage == false) {
        errorMessage = "";
    }
    document.querySelector(`#${this.name}`).innerHTML = errorMessage
    console.log("validation", validation)
}
for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener("input", handleInputFields)
}