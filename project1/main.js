const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach((button) => {
  button.addEventListener("click", (item) => {
    switch (item.target.id) {
      case "red":
        body.style.backgroundColor = item.target.id;
        break;
      case "green":
        body.style.backgroundColor = item.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = item.target.id;
        break;
      case "gray":
        body.style.backgroundColor = item.target.id;
        break;
      case "aqua":
        body.style.backgroundColor = item.target.id;
        break;
    }
  });
});
