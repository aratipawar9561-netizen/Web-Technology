
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    if (username === "student" && password === "1234") {
        document.getElementById("message").textContent =
            "Login Successful!";
    } else {
        document.getElementById("message").textContent =
            "Invalid Username or Password!";
    }
});
