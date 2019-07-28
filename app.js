const phoneBtn = document.getElementById("phoneBtn");
const padBtn = document.getElementById("padBtn");

phoneBtn.addEventListener('click', function() {
  window.location.href = "iphone-page.html";
});

padBtn.addEventListener('click', function() {
  window.location.href = "ipad-page.html";
});