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
let macArch = null;

async function detectMacArchitecture() {
  if (navigator.userAgent.indexOf("Mac") !== -1) {
    if ('userAgentData' in navigator) {
      try {
        const data = await navigator.userAgentData.getHighEntropyValues(['architecture']);
        if (data.architecture === 'arm') {
          return "arm64";
        }
        return "x86_64";
      } catch (e) {
        return "x86_64";
      }
    }
    
    // Fallback for browsers without User Agent Client Hints API
    return "x86_64";
  }
  
  return null;
}

function updateMacDownloadLinks() {
  const macDownloadLinks = document.querySelectorAll('#download_macos a[href*="apple-darwin"]');
  macDownloadLinks.forEach(link => {
    const currentHref = link.getAttribute('href');
    if (macArch === "arm64") {
      const arm64Href = currentHref.replace('x86_64-apple-darwin', 'arm64-apple-darwin');
      link.setAttribute('href', arm64Href);
    }
  });
}

if (navigator.userAgent.indexOf("Mac") !== -1) {
  os = "mac";
  detectMacArchitecture().then(arch => {
    macArch = arch;
    updateMacDownloadLinks();
  });
}
else if (navigator.userAgent.indexOf("Android") !== -1) os = "android";
else if (navigator.userAgent.indexOf("Linux") !== -1) os = "linux64";
else if (
  navigator.userAgent.indexOf("WOW64") !== -1 ||
  navigator.userAgent.indexOf("Win64") !== -1
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
