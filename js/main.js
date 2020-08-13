console.log("this is project 4");

let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let validName = false;
let validEmail = false;
let validPhone = false;


name.addEventListener('blur', () => {
    // console.log("blur event fired");
    // let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    if (regex.test(str)) {
        name.classList.add("is-valid");
        name.classList.remove("is-invalid");
        console.log("this is correct");
        validName = true;
    }
    else {
        name.classList.add("is-invalid");
        name.classList.remove("is-valid");
        console.log("this is wrong");
    }
})

email.addEventListener('blur', () => {
    // console.log("blur event fired");
    // let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let regex = /^([0-9a-zA-Z]){0,50}@gmail\.com$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        console.log("this is correct");
        validEmail = true;
    }
    else {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        console.log("this is wrong");
    }
})
phone.addEventListener('blur', () => {
    // console.log("blur event fired");
    // let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        phone.classList.add("is-valid");
        phone.classList.remove("is-invalid");
        console.log("this is correct");
        validPhone = true;
    }
    else {
        phone.classList.add("is-invalid");
        phone.classList.remove("is-valid");
        console.log("this is wrong");
    }
})


let submitBTn = document.getElementById("submitBTn");
submitBTn.addEventListener("click", (e) => {

    e.preventDefault();

    let result = document.getElementById("result");

    if (validName && validEmail && validPhone == true) {
        console.log("registration succeffull");
        let html = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Registration succeffull</strong> now you can login 
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `;
        result.innerHTML = html;
        setTimeout(() => {
            result.innerHTML = "";
        }, 2000);
        name.classList.remove("is-valid");
        email.classList.remove("is-valid");
        phone.classList.remove("is-valid");
        name.value = "";
        email.value = "";
        phone.value = "";

    }
    else {
        console.log("Try again");
        console.log("Try again");
        let html = `
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>please Try Again</strong> Please correct the form 
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    `;
        result.innerHTML = html;
        setTimeout(() => {
            result.innerHTML = "";
        }, 2000);
    }


})