document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("successPopup").style.display = "flex";

    setTimeout(() => {
      window.location.href = "end.html";
    }, 3000);
  });
