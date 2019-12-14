const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const btn = document.querySelector(".btn");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.innerHTML = "Please enter all details";
    msg.classList.add("error");
    setTimeout(() => msg.remove(), 2000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}  :  ${emailInput.value}`)
    );
    userList.appendChild(li);
    nameInput.value = "";
    emailInput.value = "";
  }
}
