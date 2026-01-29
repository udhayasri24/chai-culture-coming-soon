document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! We'll notify you when we launch ☕");
  this.reset();
});
