form.addEventListener("submit", function (event) {});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Wrong email format");
    return;
  }

  alert("Form submitted successfully");
});
