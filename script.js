const buttonA = document.getElementById("button-a");
const buttonB = document.getElementById("button-b");
const buttonC = document.getElementById("button-c");
const buttonD = document.getElementById("button-d");

function checkAnswers() {}

function toggleSelected(button) {
  clearSelected();
  console.log("Pressed", button.id);
  button.classList.toggle("selected");
  document.getElementById(button.id).style.backgroundColor='Yellow';
}

function clearSelected() {
  var buttons = document.querySelectorAll(".button-multiple-choice");
  buttons.forEach((button) => {
    document.getElementById(button.id).style.backgroundColor='White';
    button.classList.remove("selected");
  });
}

function checkMultipleChoiceAnswer() {
  var buttons = document.querySelectorAll(".button-multiple-choice");
  console.log("check answer");
  buttons.forEach((button) => {
    if (button.classList.contains("selected")) {
      console.log(button.id);

      if (button.id == "button-c") {
        document.getElementById(button.id).style.backgroundColor='Green';
        console.log("yup");
      } else {
        document.getElementById(button.id).style.backgroundColor='Red';
      }
    }
  });
}

function checkFreeResponseAnswer(id) {
  
  var response = document.getElementById(id).value;
  console.log(response);
  if (response.toLowerCase() == "grief") {
    document.getElementById('input-response').style.borderColor='Green';
    revealCorrectResponse()
  } else {
    document.getElementById('input-response').style.borderColor='Red';
  }
}

function clearTextBox(input) {
  document.getElementById('input-response').style.borderColor='White';
  input.value = "";
}


function revealCorrectResponse() {
  var element = document.getElementById("h3-free-response-text");
  correctResponse = "I sat with my anger long enough until she told me her real name was grief";
  element.textContent = correctResponse;
}