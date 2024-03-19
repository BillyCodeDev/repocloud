<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulaire de Connexion</title>
    <link rel="stylesheet" href="styles.css" />
</head>

<body>

    <div class="container">
        <form id="loginForm" action="javascript:void(0);" method="post">
            <input type="text" id="username" name="username" placeholder="Nom d'utilisateur" required />
            <input type="password" id="password" name="password" placeholder="Mot de passe" required />
            <button type="submit">Se Connecter</button>
        </form>
        <div id="message"></div>
    </div>

<?php
// Vérifie si des données ont été envoyées via la méthode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupère les données envoyées par le formulaire
    $nom = $_POST['nom'];
    $age = $_POST['age'];
    header("Location: autre_page.php");
    exit; // Assurez-vous de terminer le script après la redirection
}
?>



    
</body>

</html>