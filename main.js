// Muti page web by Bernie

document.getElementById("btn").addEventListener("click", check);

function check() {
  // Reset
  let correct = 0;
  // Input
  let an1 = document.getElementById("answer1");
  let an2 = document.getElementById("answer2");
  let an3 = document.getElementById("answer3");
  let an4 = document.getElementById("answer4");
  let an5 = document.getElementById("answer5");
  let an6 = document.getElementById("answer6");
  let an7 = document.getElementById("answer7");
  let an8 = document.getElementById("answer8");

  let q1 = document.getElementById("1");
  let q2 = document.getElementById("2");
  let q3 = document.getElementById("3");
  let q4 = document.getElementById("4");
  let q5 = document.getElementById("5");
  let q6 = document.getElementById("6");
  let q7 = document.getElementById("7");
  let q8 = document.getElementById("8");
  // Check Questions
  if (q1.value.toLowerCase() == 4.6) {
    an1.innerHTML = "Correct";
    an1.style.color = "rgb(0,128,0)";
    correct++;
    q1.style.borderColor = "rgb(0,128,0)";
  } else {
    an1.innerHTML = "Incorrect";
    an1.style.color = "rgb(255,0,0)";
    q1.style.borderColor = "rgb(255,0,0)";
  }
  if (q2.value.toLowerCase() == "mercury") {
    an2.innerHTML = "Correct";
    an2.style.color = "rgb(0,128,0)";
    correct++;
    q2.style.borderColor = "rgb(0,128,0)";
  } else {
    an2.innerHTML = "Incorrect";
    an2.style.color = "rgb(255,0,0)";
    q2.style.borderColor = "rgb(255,0,0)";
  }
  if (q3.value.toLowerCase() == "thick") {
    an3.innerHTML = "Correct";
    an3.style.color = "rgb(0,128,0)";
    correct++;
    q3.style.borderColor = "rgb(0,128,0)";
  } else {
    an3.innerHTML = "Incorrect";
    an3.style.color = "rgb(255,0,0)";
    q3.style.borderColor = "rgb(255,0,0)";
  }
  if (q4.value.toLowerCase() == "life") {
    an4.innerHTML = "Correct";
    an4.style.color = "rgb(0,128,0)";
    correct++;
    q4.style.borderColor = "rgb(0,128,0)";
  } else {
    an4.innerHTML = "Incorrect";
    an4.style.color = "rgb(255,0,0)";
    q4.style.borderColor = "rgb(255,0,0)";
  }
  if (q5.value.toLowerCase() == "reddish") {
    an5.innerHTML = "Correct";
    an5.style.color = "rgb(0,128,0)";
    correct++;
    q5.style.borderColor = "rgb(0,128,0)";
  } else {
    an5.innerHTML = "Incorrect";
    an5.style.color = "rgb(255,0,0)";
    q5.style.borderColor = "rgb(255,0,0)";
  }
  if (q6.value.toLowerCase() == "storms" || q6.value.toLowerCase() == "storm") {
    an6.innerHTML = "Correct";
    an6.style.color = "rgb(0,128,0)";
    correct++;
    q6.style.borderColor = "rgb(0,128,0)";
  } else {
    an6.innerHTML = "Incorrect";
    an6.style.color = "rgb(255,0,0)";
    q6.style.borderColor = "rgb(255,0,0)";
  }
  if (
    q7.value.toLowerCase() == "ice and rock" ||
    q7.value.toLowerCase() == "rock and ice"
  ) {
    an7.innerHTML = "Correct";
    an7.style.color = "rgb(0,128,0)";
    correct++;
    q7.style.borderColor = "rgb(0,128,0)";
  } else {
    an7.innerHTML = "Incorrect";
    an7.style.color = "rgb(255,0,0)";
    q7.style.borderColor = "rgb(255,0,0)";
  }
  if (q8.value.toLowerCase() == "uranus") {
    an8.innerHTML = "Correct";
    an8.style.color = "rgb(0,128,0)";
    correct++;
    q8.style.borderColor = "rgb(0,128,0)";
  } else {
    an8.innerHTML = "Incorrect";
    an8.style.color = "rgb(255,0,0)";
    q8.style.borderColor = "rgb(255,0,0)";
  }
  let percent = (correct / 8) * 100;
  document.getElementById(
    "score"
  ).innerHTML = `Your Score: ${correct}/8 (${percent}%)`;
  if (percent == 100) {
    document.getElementById("sentence").innerHTML =
      "Wow, you got every question correct!";
  } else if (percent >= 75) {
    document.getElementById("sentence").innerHTML = "Great Job!";
  } else if (persent >= 50) {
    document.getElementById("sentence").innerHTML = "You got half correct!";
  } else if (persent >= 25) {
    document.getElementById("sentence").innerHTML = "This is a bit difficult.";
  } else {
    document.getElementById("sentence").innerHTML = "Please Try Again";
  }
}
// 1. About 4.6 billion years old. 2.  Mercury. 3. Because of its thick atmosphere. 4. It is the only planet currently known to support life. 5. Because of its reddish surface. 6.Its giant storms. 7.  Ice and rock. 8.  Uranus.
