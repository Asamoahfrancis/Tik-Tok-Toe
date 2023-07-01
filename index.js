const getMain = document.getElementById("myMain");
const getMainChildren = getMain.children;

const getOne = document.getElementById("one");
let playerChoose = 0;
getMain.addEventListener("click", (e) => {
  let targetElement = e.target;
  playerChoose++;
  let correctstargets = getMain.contains(targetElement);
  if (correctstargets) {
    if (playerChoose % 2 === 1) {
      targetElement.style.backgroundImage =
        "linear-gradient(rgba(38, 28, 72, 5),rgba(38, 28, 72, 5))";

      let newChildren = Array.from(getMainChildren);
      for (let index = 0; index < newChildren.length; index++) {
        if (newChildren[index] == targetElement) newChildren.splice(index, 1);
      }
      console.log("this", newChildren);

      let randomValue = Math.round(
        Math.random() * (newChildren.length - 0) + 0
      );
      newChildren[randomValue].style.backgroundImage =
        "linear-gradient( rgba(5, 40, 28, 0.5),rgba(5, 40, 28, 0.5))";
    }
  } else {
    console.log("not marked");
  }
});

// "linear-gradient(rgba(38, 28, 72, 5),rgba(38, 28, 72, 5))";
//  "linear-gradient( rgba(5, 40, 28, 0.5),rgba(5, 40, 28, 0.5))";
