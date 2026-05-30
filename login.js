function login() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;

  let message = document.getElementById("message");

  // Username validation
  let usernamePattern = /^[a-zA-Z0-9_]{4,}$/;

  // Password validation
  let passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!usernamePattern.test(username)) {
    message.innerHTML =
      "❌ Username must be at least 4 characters and contain only letters, numbers, or _";
    return;
  }

  if (!passwordPattern.test(password)) {
    message.innerHTML =
      "❌ Password must contain 8+ characters, uppercase, lowercase, number, and special character";
    return;
  }

  message.innerHTML = "✅ Login Successful...";

  setTimeout(() => {
    window.location.href = "home.html";
  }, 2000);
}
function refreshPage() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("message").innerHTML = "";
}
