const buttonA = document.getElementById("button-a");
const buttonB = document.getElementById("button-b");
const buttonC = document.getElementById("button-c");
const buttonD = document.getElementById("button-d");

function checkAnswers() {}

function toggleSelected(button) {
  clearSelected();
  console.log("Pressed", button.id);
  button.classList.toggle("selected");
}

function clearSelected() {
  var buttons = document.querySelectorAll(".button-multiple-choice");
  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
}

function checkMultipleChoiceAnswer() {
  var buttons = document.querySelectorAll(".button-multiple-choice");
  console.log("check answer");
  buttonC.style.backgroundColor = "green";
  buttons.forEach((button) => {
    if (button.classList.contains("selected")) {
      console.log(button.id);

      if (button.id == "button-c") {
        console.log("yup");
      }
    }
  });
}

function checkFreeResponseAnswer(id) {
  var response = document.getElementById(id).value;
  if (response == answer) {
  }
}

function clearTextBox(input) {
  input.value = "";
}
