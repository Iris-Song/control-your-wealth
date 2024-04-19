document.addEventListener("DOMContentLoaded", () => {
    const d = new Date()
    year = d.getFullYear()
    month = d.getMonth() + 1
    // console.log(year,month)

    const idToken = sessionStorage.getItem("idToken");
    const Url = "https://gk8v06fere.execute-api.us-east-1.amazonaws.com/dev/report/month"
    axios.get(Url, {
      headers: { Authorization: `Bearer ${idToken}` },
      params: {
          month: month,
          year: year
      },
    }).then(
      (response) => {
        console.log(response);
        // display = document.getElementById("usernameDisplay");
        // var username = sessionStorage.getItem("username");
        // if (username) {
        //   display.textContent = username;
        // } else {
        //   display.textContent = "Please Log In";
        //   window.location.href = "./login.html";
        // }
      }
    ).catch();
    // display = document.getElementById("");
    // var username = sessionStorage.getItem("username");
    // if (username) {
    //   display.textContent = username;
    // } else {
    //     console.log(display.textContent);
    //     display.textContent = 1000;
    // }
  });