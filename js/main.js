let btn = document.querySelector("#btn");
let input = document.querySelector("#input");

// btn.addEventListener("click", Changepassword);

btn.onclick = function () {
  if (btn.getAttribute("data-text") === "show") {
    input.setAttribute("type", "text");
    btn.setAttribute("data-text", "hide");
    btn.innerHTML = "Hide";
  } else {
    input.setAttribute("type", "password");
    btn.setAttribute("data-text", "show");
    btn.innerHTML = "Show";
  }
};

// App4
let img = document.getElementById("image");
let images = [
  "Image/bac.jpg",
  "Image/wallpaperflare.com_wallpaper (3).jpg",
  "Image/wallpaperflare.com_wallpaper.jpg",
];
let i = 0;
function slideshow() {
  img.setAttribute("src", images[i]);
  if (i == images.length - 1) {
    i = 0;
  } else {
    i++;
  }
  setTimeout(function () {
    slideshow();
  }, 2000);
}
slideshow();
