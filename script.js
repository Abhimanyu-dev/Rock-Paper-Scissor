function play(choice) {
  arr = ["Rock", "Paper", "Scissor"];
  computer = document.querySelector("#" + arr[Math.floor(Math.random() * 3)]);
  // console.log(choice)
  // console.log(computer);
  remove_user_border(choice);
  remove_computer_border(computer);

  computer.style.border = "5px solid gold";
  computer.style["border-radius"] = "100%";
  if (choice.alt == "Rock" && computer.alt == "Paper") message(1);
  if (choice.alt == "Rock" && computer.alt == "Scissor") message(0);
  if (choice.alt == "Rock" && computer.alt == "Rock") message(2);
  if (choice.alt == "Paper" && computer.alt == "Paper") message(2);
  if (choice.alt == "Paper" && computer.alt == "Scissor") message(1);
  if (choice.alt == "Paper" && computer.alt == "Rock") message(0);
  if (choice.alt == "Scissor" && computer.alt == "Paper") message(0);
  if (choice.alt == "Scissor" && computer.alt == "Scissor") message(2);
  if (choice.alt == "Scissor" && computer.alt == "Rock") message(1);
}

function remove_user_border(element) {
  arr = ["Rock", "Paper", "Scissor"];
  for (i = 0; i < 3; i++) {
    if (element.alt == arr[i]) continue;
    useless = document.querySelector("." + arr[i]);
    useless.style.border = "none";
  }
}
function remove_computer_border(element) {
  arr = ["Rock", "Paper", "Scissor"];
  for (i = 0; i < 3; i++) {
    if (element.alt == arr[i]) continue;
    useless = document.querySelector("#" + arr[i]);
    useless.style.border = "none";
  }
}

function fun(element) {
  element.style.border = "5px solid gold";
  element.style["border-radius"] = "100%";

  play(element);
}

function message(x) {
  arr = ["Victory", "Defeat", "Draw"];
  console.log(arr[x]);
  result = document.querySelector(".result");
  result.innerHTML = arr[x];
}
