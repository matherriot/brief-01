function openWin() {
  myWindow = window.open(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "myWindow"
  );
}

function myFunction() {
  const x = document.getElementById("close");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    const body = document.querySelector("body");
    body.classList.toggle("no-scroll");
  }
}

//   function openWin() {
//     myWindow = window.open("", "myWindow");
//   }
// }
