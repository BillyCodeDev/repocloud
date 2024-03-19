// Récupération des éléments select
const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const hourSelect = document.getElementById("hour");
const minuteSelect = document.getElementById("minute");
const roomSelect = document.getElementById("room");

// Ajout des options pour les jours (de 1 à 31)
for (let i = 1; i <= 31; i++) {
    let dayOption = document.createElement("option");
    dayOption.text = i.toString().padStart(2, "0");
    dayOption.value = i.toString().padStart(2, "0");
    daySelect.add(dayOption);
}

// Ajout des options pour les mois
const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];
months.forEach((month, index) => {
    let monthOption = document.createElement("option");
    monthOption.text = month;
    monthOption.value = (index + 1).toString().padStart(2, "0");
    monthSelect.add(monthOption);
});

// Ajout des options pour les heures (de 8h à 17h)
for (let i = 8; i <= 17; i++) {
    let hourOption = document.createElement("option");
    hourOption.text = i.toString().padStart(2, "0") + "h";
    hourOption.value = i.toString().padStart(2, "0");
    hourSelect.add(hourOption);
}

// Ajout des options pour les minutes (de 00 à 59)
for (let i = 0; i < 60; i++) {
    let minuteOption = document.createElement("option");
    minuteOption.text = i.toString().padStart(2, "0");
    minuteOption.value = i.toString().padStart(2, "0");
    minuteSelect.add(minuteOption);
}

// Ajout des options pour les salles (de 1 à 17)
for (let i = 1; i <= 17; i++) {
    let roomOption = document.createElement("option");
    roomOption.text = "Salle " + i.toString();
    roomOption.value = i.toString();
    roomSelect.add(roomOption);
}
