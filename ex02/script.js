const title = document.getElementById("title")
const message = document.getElementById("message")
const firstitem = document.querySelector(".item")

title.textContent="Learn the reason for programming";
message.textContent="Learning to program empowers you to transform your ideas into digital reality—whether it is an application, a website, or a smart tool."
firstitem.textContent="c++"

title.style.letterSpacing = "2px";
message.style.fontSize = "20px";
message.style.color = "red";

firstitem.classList.add("active");
