
const inputs = document.querySelectorAll('.form-control');

const constraints = {
    username: {
        presence: true,
        length: {
            minimum: 5,
            message: "must be at least 5 characters"
        }
    },
    password: {
        presence: true,
        length: {
            minimum: 6,
            message: "must be at least 6 characters"
        }
    }
};

function handleInputField (event) {
    const data = {
        [this.name]: this.value
    }

const error = validate(data, constraints);
if (error[this.name]) {
    document.querySelector(`#${this.name}`)
    .innerHTML = error[this.name][0];
} else {
    document.querySelector(`#${this.name}`)
    .innerHTML = ""
}


}

if(validate) {
    console.log()
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', handleInputField)
    }
}