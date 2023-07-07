let emailInput = document.querySelector("[name='mail']");
let passInput = document.querySelector("[name='pass']");
const loginErrorMsg = document.getElementById("login-error-msg");
console.log("loginErrorMsg", loginErrorMsg)

document.forms[0].onsubmit = function (e) {
  let emailValid = false;
  console.log("emailValid", emailValid)
  let passValid = false;
  console.log("passValid", passValid)
  const user = ["youssef", "omar", "shamy", "shohta", "Mahmoud"];

  console.log(emailInput.value);

  for (let i = 0; i < 5; i++) {
    if (emailInput.value === user[i] && passInput.value === "123") {
      emailValid = passValid = true;
      loginErrorMsg.style.opacity = 0;
    }
  } 

  if (emailValid === false || passValid === false) {
    loginErrorMsg.style.opacity = 1;
    e.preventDefault();
  }
};
