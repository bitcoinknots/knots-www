const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const knots_line = document.getElementById("knots-line");

const navLinks = document.querySelectorAll(".nav-link");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  });
});

let os = "windows64";
if (navigator.userAgent.indexOf("Mac") != -1) os = "mac";
else if (navigator.userAgent.indexOf("Android") != -1) os = "android";
else if (navigator.userAgent.indexOf("Linux") != -1) os = "linux64";
else if (
  navigator.userAgent.indexOf("WOW64") != -1 ||
  navigator.userAgent.indexOf("Win64") != -1
)
  os = "windows64";
// document.getElementById("other_downloads").classList.add("hidden");
document.getElementById("download_other").classList.remove("hidden");
switch (os) {
  case "android":
    // Show default Windows + macOS
    break;
  case "windows64":
    document.getElementById("download_macos").classList.add("hidden");
    break;
  case "linux64":
    document.getElementById("download_win64").classList.add("hidden");
    document.getElementById("download_macos").classList.add("hidden");
    document.getElementById("top_download_signatures").classList.add("hidden"); // n/a to PPA
    document
      .getElementById("bottom_download_signatures")
      .classList.remove("hidden");
    document.getElementById("bottom_download_signatures").classList.add("flex");
    document.getElementById("download_ubuntu").classList.remove("hidden");
    document.getElementById("download_ubuntu").classList.add("flex");
    break;
  case "mac":
    document.getElementById("download_win64").classList.add("hidden");
    break;
}
// const links = document.querySelectorAll("a.warn_telegram");
//
// links.forEach((link) => {
//   link.addEventListener("click", function (event) {
//     event.preventDefault();
//
//     const userConfirmed = confirm("WARNING: It is very easy to spoof users on Telegram! Never send someone bitcoins based on a Telegram conversation! ");
//
//     if (userConfirmed) {
//       window.location.href = this.href;
//     }
//   });
// });
