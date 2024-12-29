const loginBtn = document.getElementById("btn2");

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let storageName = localStorage.getItem("name");
    let storagePswd = localStorage.getItem("pswd");
    let inputUserName = document.getElementById("formName").value;
    let inputUserPswd = document.getElementById("formPswd").value;

    if (storageName === inputUserName && storagePswd === inputUserPswd) {

        Swal.fire({
            title: 'Login Successful!',
            text: 'Welcome!! Access your choco treats.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {

            sessionStorage.setItem("islogin", true);
            window.location.href = "../Home_page/Home.html";
        });
    } else {

        Swal.fire({
            title: 'Error!',
            text: 'Wrong credentials. Please enter valid credentials.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});


let formPswd = document.getElementById("formPswd")
let icon = document.getElementById("icon")

icon.onclick = function () {
    if (formPswd.type === "password") {
        formPswd.type = "text"
        icon.className = "fa-solid fa-eye"
    } else {
        formPswd.type = "password"
        icon.className = "fa-solid fa-eye-slash"
    }
}