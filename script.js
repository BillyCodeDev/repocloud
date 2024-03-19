document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupère les valeurs des champs d'identifiant et de mot de passe
    var idValue = document.getElementById("id").value;
    var passwordValue = document.getElementById("password").value;

    // Affiche les valeurs dans la console à des fins de vérification
    console.log("Identifiant:", idValue);
    console.log("Mot de passe:", passwordValue);

    // Vous pouvez maintenant effectuer toute autre action que vous souhaitez avec ces valeurs, comme les traiter en JavaScript ou les envoyer à un serveur via une requête AJAX
  });