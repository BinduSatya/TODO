const inputBox = document.getElementById("inputBox");
const inpContainer = document.getElementById("inpContainer");

const showPopup = (message) => {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerText = message;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 2000);
};

const addTask = () => {
  if (inputBox.value === "") {
    showPopup("Nothing to add");
    // alert("You must wire");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    let spanar = document.createElement("span");
    spanar.innerHTML = "\u00d7";
    li.appendChild(spanar);
    inpContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
};

inpContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
  saveData();
});

inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

const saveData = () => {
  localStorage.setItem("data", inpContainer.innerHTML);
};

const loadData = () => {
  inpContainer.innerHTML = localStorage.getItem("data");
};

loadData();

const clearAll = () => {
  //   const list = document.querySelector("ul");
  const listItems = inpContainer.querySelectorAll("li");
  for (const item of listItems) {
    console.log(item.textContent);
  }
};
