const button1 = document.querySelector(".send-btn1");
button1.addEventListener("touchstart", function () {
  this.style.backgroundColor = "rgb(83, 5, 107)";
});

button1.addEventListener("touchend", function () {
  this.style.backgroundColor = "linear-gradient(90deg, #7f2396, #a08ca0);";
});

const button2 = document.querySelector(".send-btn2");
button2.addEventListener("touchstart", function () {
  sendButton.style.backgroundColor = "#a852a8";
});

button2.addEventListener("touchend", function () {
  sendButton.style.backgroundColor = "";
});
