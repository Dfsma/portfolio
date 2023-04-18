/*const btn = document.querySelector(".btn-toggle");
const siteTitle = document.getElementById("site-title");
const navTitles = document.getElementById("nav-style");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
  siteTitle.style["color"] = "white";
  navTitles.style["color"] = "white";
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});*/


function darkMode() {
  var element = document.body;
  var darked  = element.classList.toggle("dark-mode");
  /*console.log("" + darked)*/
  const iconValue = document.querySelector("#icon");
 
  if(darked){
    iconValue.textContent = 'light_mode';
  }else{
    iconValue.textContent = 'dark_mode';
  }
}