let submitBtn = document.getElementById("btn");
let name = document.getElementById("userName");
let email = document.getElementById("userEmail");
let pswd = document.getElementById("userPswd");
submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    if (name.value !== "" && email.value !== "" && pswd.value !== "") {
        const nameValue = name.value;
        const emailValue = email.value;
        const pswdValue = pswd.value;
        localStorage.setItem("name", nameValue);
        localStorage.setItem("email", emailValue);
        localStorage.setItem("pswd", pswdValue);
        allusers = JSON.parse(localStorage.getItem("user")) || []

        Swal.fire({
            title: 'Sign-In Successful!',
            text: 'Your account has been created successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.href = "../Login_page/Login.html";
        });
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill up all the fields.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});


function validatePassword() {
    const password = document.getElementById('userPswd').value;
    const confirmPassword = document.getElementById('userPswdConfirm').value;
    const confirmField = document.getElementById('userPswdConfirm');

    if (password !== confirmPassword) {
        confirmField.setCustomValidity("Passwords do not match.");
    } else {
        confirmField.setCustomValidity("");
    }

}

let userPswd = document.getElementById("userPswd")
let userPswdConfirm = document.getElementById("userPswdConfirm")
let icon = document.getElementById("icon")

icon.onclick = function () {
    if (userPswd.type === "password") {
        userPswd.type = "text"
        icon.className = "fa-solid fa-eye"
    } else {
        userPswd.type = "password"
        icon.className = "fa-solid fa-eye-slash"
    }
}