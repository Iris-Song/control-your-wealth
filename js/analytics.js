document.addEventListener("DOMContentLoaded", () => {
    display = document.getElementById("fgjhs");
    var username = sessionStorage.getItem("username");
    if (username) {
      display.textContent = username;
    } else {
        console.log(display.textContent);
        display.textContent = 1000;
    }
  });