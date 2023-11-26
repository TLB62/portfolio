// écouteur d'évènement au formulaire pour les soumissions par l'utilisateur
form.addEventListener("submit", function (event) {});

// empêcher le rechargement de la page
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
});

// vérifier que l'adresse mail est valide
// afficher un message d'erreur si ce n'est pas le cas
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;

  if (!emailPattern.test(email)) {
    alert("Veuillez saisir un email valide");
    return;
  }

  alert("Votre message a bien été envoyé");
});
